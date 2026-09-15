import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { agencyConfig } from "@/data/agency";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-24 sm:py-32">
      <Container className="text-center flex flex-col items-center gap-6">
        <Badge variant="primary">Foundation & Layout Ready</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl">
          {agencyConfig.name}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {agencyConfig.tagline}
        </p>
        <div className="pt-4 text-xs font-mono text-muted-foreground">
          Navbar & Footer successfully configured. Ready for Section implementation.
        </div>
      </Container>
    </div>
  );
}
