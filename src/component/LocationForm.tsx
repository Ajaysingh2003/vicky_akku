"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import toast from "react-hot-toast";


// export function ImageUploader({ value, onChange }: { value: string; onChange: (url: string) => void }) {
//   console.log(value,"456456")
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [state, setState] = useState<ThumbState>(value ? { s: "done", url: value } : { s: "idle" });
//   const [drag, setDrag] = useState(false);

//   const trpc = useTRPC();
//   const getUrls = useMutation(trpc.tutorials.getSignedUrl.mutationOptions());

//   const upload = useCallback(async (file: File) => {
//     if (!file.type.startsWith("image/")) { setState({ s: "error", msg: "Images only (JPG, PNG, WEBP)" }); return; }
//     if (file.size > 10 * 1024 * 1024) { setState({ s: "error", msg: "Max file size is 10 MB" }); return; }

//     setState({ s: "uploading", pct: 0 });
//     let uploadUrl: string, key: string;

//     try {
//       const res = await getUrls.mutateAsync([{ name: file.name, type: file.type, size: file.size }]);
//       uploadUrl = res.files[0].uploadUrl;
//       key = res.files[0].key;
//     } catch {
//       setState({ s: "error", msg: "Could not get upload URL" }); return;
//     }

//     const xhr = new XMLHttpRequest();
//     xhr.upload.onprogress = (e) => { if (e.lengthComputable) setState({ s: "uploading", pct: (e.loaded / e.total) * 100 }); };
//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const url = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${key}`;
//         setState({ s: "done", url });
//         onChange(url);
//       } else setState({ s: "error", msg: `Server error ${xhr.status}` });
//     };
//     xhr.onerror = () => setState({ s: "error", msg: "Network error" });
//     xhr.open("PUT", uploadUrl);
//     xhr.setRequestHeader("Content-Type", file.type);
//     xhr.send(file);
//   }, [getUrls, onChange]);

//   return (
//     <div
//       onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
//       onDragLeave={() => setDrag(false)}
//       onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) upload(f); }}
//       className={cn("relative rounded-xl overflow-hidden border-2 border-dashed transition-all", drag ? "border-neutral-400 bg-neutral-50" : state.s === "done" ? "border-transparent" : "border-neutral-200 hover:border-neutral-300")}
//     >
//       <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }} />

//       {state.s === "idle" && (
//         <button type="button" onClick={() => inputRef.current?.click()} className="w-full h-40 flex flex-col items-center justify-center gap-3 group">
//           <div className="w-11 h-11 rounded-xl border border-neutral-200 bg-white flex items-center justify-center shadow-sm group-hover:border-neutral-300 transition-colors">
//             <ImageIcon className="w-5 h-5 text-neutral-400" />
//           </div>
//           <p className="text-sm text-neutral-500">
//             Drop image or <span className="text-neutral-900 font-semibold underline underline-offset-2">choose file</span>
//           </p>
//           <p className="text-xs text-neutral-400">JPG, PNG, WEBP · up to 10 MB</p>
//         </button>
//       )}

//       {state.s === "uploading" && (
//         <div className="h-40 flex flex-col items-center justify-center gap-4">
//           <Loader2 className="w-5 h-5 text-neutral-500 animate-spin" />
//           <div className="w-36 space-y-1.5">
//             <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
//               <div className="h-full bg-neutral-800 rounded-full transition-all" style={{ width: `${state.pct}%` }} />
//             </div>
//             <p className="text-xs text-neutral-400 text-center">{Math.round(state.pct)}%</p>
//           </div>
//         </div>
//       )}

//       {state.s === "done" && (
//         <div className="group relative">
//          <div className="relative w-full aspect-video">
//   <img
//     src={state.url}
//     alt="Thumbnail"
//     className="absolute inset-0 w-full h-full object-cover"
//   />
// </div>
//           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//             <button type="button" onClick={() => inputRef.current?.click()} className="px-3 py-1.5 bg-white/90 hover:bg-white rounded-lg text-xs font-semibold text-neutral-800 transition-colors flex items-center gap-1.5">
//               <UploadCloud className="w-3.5 h-3.5" /> Replace
//             </button>
//             <button type="button" onClick={() => { setState({ s: "idle" }); onChange(""); }} className="px-3 py-1.5 bg-black/50 hover:bg-black/70 rounded-lg text-xs font-semibold text-white transition-colors flex items-center gap-1.5">
//               <X className="w-3.5 h-3.5" /> Remove
//             </button>
//           </div>
//         </div>
//       )}

//       {state.s === "error" && (
//         <div className="h-40 flex flex-col items-center justify-center gap-2">
//           <AlertCircle className="w-5 h-5 text-red-400" />
//           <p className="text-sm text-red-500">{state.msg}</p>
//           <button type="button" onClick={() => setState({ s: "idle" })} className="text-xs text-neutral-500 underline underline-offset-2 mt-1">Try again</button>
//         </div>
//       )}
//     </div>
//   );
// }

const locationSchema = z.object({

  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .optional()
    .or(z.literal("")),
  place: z.string().optional(),
   image: z.string().optional(),
});

type LocationFormValues = z.infer<typeof locationSchema>;

export default function LocationForm() {
    const trpc=useTRPC()
    const mutate=useMutation(trpc.workshop.CreateLocation.mutationOptions({
        onSuccess:()=>{
            toast.success("Location Created")
        },
        onError:()=>{
            toast.error("Something went wrong.")
        }
    }))


  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
  } = useForm<LocationFormValues>({
    resolver: zodResolver(locationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LocationFormValues) => {
    
    try {
      setServerError(null);
      setSuccess(false);
        
      

      console.log(data,45678)
        
      await mutate.mutateAsync({

        name:data.name,
        address:data.address,
        state:data.state,
        city:data.city,
        country:data.country,
        pincode:data.pincode,
        place:data.place,
        image:data.image
      })

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setServerError("Failed to create location. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-muted/40 p-6 flex items-center justify-center">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Create Location</CardTitle>
          <CardDescription>Add a new workshop location</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {serverError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Location created successfully</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Location Name" error={errors.name?.message} touched={touchedFields.name}>
                <Input placeholder="e.g. Main Hall" {...register("name")} />
              </Field>

              <Field label="City" error={errors.city?.message} touched={touchedFields.city}>
                <Input placeholder="e.g. Indore" {...register("city")} />
              </Field>

              <Field label="State" error={errors.state?.message} touched={touchedFields.state}>
                <Input placeholder="e.g. MP" {...register("state")} />
              </Field>

              <Field label="Country" error={errors.country?.message} touched={touchedFields.country}>
                <Input placeholder="e.g. India" {...register("country")} />
              </Field>

              <Field label="Pincode" error={errors.pincode?.message} touched={touchedFields.pincode}>
                <Input placeholder="6 digit code" {...register("pincode")} />
              </Field>

              <Field label="Place">
                <Input placeholder="Optional" {...register("place")} />
              </Field>
            </div>

            <Field label="Full Address" error={errors.address?.message} touched={touchedFields.address}>
              <Textarea placeholder="Enter full address" {...register("address")} />
            </Field>

            <Field label="Image">
  <SmallImageUpload
    value={watch("image")}
    onChange={(url) => setValue("image", url)}
  />
</Field>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Creating..." : "Create Location"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, error, touched, children }: any) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error && touched && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}















function SmallImageUpload({
  value,
  onChange,
}: {
  value?: string;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const trpc = useTRPC();
  const getUrls = useMutation(trpc.tutorials.getSignedUrl.mutationOptions());
  const [loading, setLoading] = useState(false);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) return;

    setLoading(true);

    try {
      const res = await getUrls.mutateAsync([
        { name: file.name, type: file.type, size: file.size },
      ]);

      const { uploadUrl, key } = res.files[0];

      await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      const url = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${key}`;
      onChange(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div
        onClick={() => inputRef.current?.click()}
        className="w-20 h-20 border rounded-md flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {value ? (
          <img src={value} className="w-full h-full object-cover" />
        ) : loading ? (
          <Loader2 className="animate-spin w-4 h-4" />
        ) : (
          <span className="text-xs text-muted-foreground">Upload</span>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {value && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onChange("")}
        >
          Remove
        </Button>
      )}
    </div>
  );
}



