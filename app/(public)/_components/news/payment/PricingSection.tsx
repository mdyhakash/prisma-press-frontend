import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SubscribeButton } from "./SubscribeButton";

const plans = [
  {
    name: "Reader",
    price: "Free",
    description: "For casual reading and following your favorite writers.",
    features: [
      "Unlimited free articles",
      "Comment on posts",
      "Follow authors",
      "Weekly digest email",
    ],
    cta: "Current plan",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$8",
    period: "/month",
    description: "Full access to every gated article, forever.",
    features: [
      "Everything in Reader",
      "Unlock all premium articles",
      "Ad-free reading experience",
      "Early access to new posts",
      "Support independent writers directly",
    ],
    cta: "Upgrade to Premium",
    highlighted: true,
  },
  {
    name: "Author",
    price: "$15",
    period: "/month",
    description: "For writers who want to publish and monetize.",
    features: [
      "Everything in Premium",
      "Publish unlimited posts",
      "Gate your own posts as premium",
      "Author analytics dashboard",
      "Priority support",
    ],
    cta: "Become an Author",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section>
      <div className="mx-auto max-w-2xl text-center">
        <div className="prism-rule mx-auto w-14" />
        <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
          Refract every article into focus
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Simple pricing for readers and writers. Cancel anytime — no questions
          asked.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-xl border p-7",
              plan.highlighted
                ? "border-primary shadow-lg shadow-primary/10"
                : "border-border",
            )}
          >
            {plan.highlighted && (
              <Badge className="absolute -top-3 left-7 bg-accent text-accent-foreground hover:bg-accent">
                Most popular
              </Badge>
            )}

            <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              )}
            </div>

            <div className="mt-6">
              <SubscribeButton
                label={plan.cta}
                highlighted={plan.highlighted}
              />
            </div>

            <div
              className={cn(
                "prism-rule my-6 w-full",
                !plan.highlighted && "opacity-30",
              )}
            />

            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-border bg-secondary/30 p-8 text-center">
        <h2 className="font-display text-xl font-semibold">
          Not sure which plan fits?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Start free as a Reader — upgrade to Premium the moment you hit a gated
          article you want to read.
        </p>
      </div>
    </section>
  );
}
