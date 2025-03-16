import LocationForm from "@/components/location-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Share a Location
        </h1>
        <p className="text-muted-foreground">
          Upload an image and details about any interesting place you've discovered.
        </p>
      </div>
      <LocationForm />
    </div>
  );
}
