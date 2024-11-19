import { Check, HelpCircle, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function Pricing() {
  const tiers = [
    {
      name: "Basic Report",
      price: "$49.99",
      oldprice: "$69.99",
      description: "For those who want an overview of their website's performance with key insights.",
      features: [
        "Site Health Overview",
        "SEO Errors",
        "Backlink Overview",
        "Top Keywords (Up to 10)",
        "Traffic Overview",
        "Mobile Usability",
        "Page Speed Insights",
      ],
      link: "https://buy.stripe.com/cN26rZaRHceq2HKeUV",
    },
    {
      name: "Pro Report",
      price: "$129.99",
      oldprice: "$199.99",
      description:
        "For those who want a comprehensive analysis of their website's performance and competitive strategy.",
      features: [
        "Detailed Site Health Overview",
        "Comprehensive SEO Errors and Warnings",
        "Full Keyword Analysis",
        "Backlink Audit",
        "x3 Competitor Analysis",
        "Traffic Breakdown",
        "Mobile Usability Full Report",
        "Advanced Page Speed Insights",
        "Core Web Vitals Insights",
        "On-Page SEO Suggestions (All Pages)",
      ],
      link: "https://buy.stripe.com/5kA3fN0d34LY4PS6oq",
    },
  ];

  const featureComparison = [
    { feature: "Site Health Overview", basic: true, pro: "Detailed breakdown" },
    { feature: "SEO Errors", basic: true, pro: "Comprehensive with solutions" },
    { feature: "Top Keywords", basic: "10 Keywords", pro: "Full analysis" },
    { feature: "Keyword Intent", basic: true, pro: "Full analysis" },
    { feature: "Backlink Overview", basic: true, pro: "In-depth audit" },
    { feature: "Competitor Analysis", basic: false, pro: "3 Competitors" },
    { feature: "Traffic Overview", basic: true, pro: "Detailed breakdown" },
    { feature: "Mobile Usability", basic: true, pro: "Comprehensive report" },
    { feature: "Page Speed Insights", basic: true, pro: "Advanced with suggestions" },
    { feature: "Core Web Vitals Insights", basic: false, pro: true },
    { feature: "Advanced Keyword Gap Analysis", basic: false, pro: true },
    { feature: "Position Tracking", basic: false, pro: true },
    { feature: "Technical SEO Recommendations", basic: false, pro: true },
    { feature: "Content Audit", basic: false, pro: true },
    { feature: "Backlink Growth Trends", basic: false, pro: true },
  ];

  return (
    <div className="bg-[#FCFCFC] py-16 lg:py-32 max-w-7xl mx-auto" id="offer-pricing">
      <div className="site-wrapper">
        <div className="flex flex-col gap-6 mb-16">
          <h2 className="text-3xl font-bold text-center w-full md:w-4/5 mx-auto lg:text-4xl">Equip yourself with one of the industry&apos;s top reports,  delivering powerful insights and solutions for your website  - and your competitors!</h2>
          <p className="text-lg font-light w-full md:w-4/5 mx-auto text-center">We&apos;ve slashed our prices on two powerful analysis deals, giving you unbeatable insights into your website and your competitors. The first offer provides a high-level overview of your website&apos;s health, performance, and pinpointed areas for improvement. The second offer adds a competitor analysis of three  rival sites, showing you exactly what it takes to surge ahead.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">{tier.price} <span className="text-xl line-through text-gray-500 font-light">{tier.oldprice}</span> <span className="text-xs font-light text-gray-500">/ NZD</span></p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={tier.link} passHref className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">Report Comparison</h3>
      <TooltipProvider>
        <Table className="max-w-5xl mx-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Feature</TableHead>
              <TableHead className="w-1/3">Hobby</TableHead>
              <TableHead className="w-1/3">Pro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {featureComparison.map((row) => (
              <TableRow key={row.feature}>
                <TableCell className="font-medium">
                  {row.feature}
                  {row.feature === "Analytics" && (
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 inline-block ml-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Basic: Page views and unique visitors</p>
                        <p>Advanced: User behavior, conversion tracking, and custom reports</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell>
                  {typeof row.basic === "boolean" ? (
                    row.basic ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="h-5 w-5 text-gray-300" />
                    )
                  ) : (
                    row.basic
                  )}
                </TableCell>
                <TableCell>
                  {typeof row.pro === "boolean" ? (
                    row.pro ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="h-5 w-5 text-gray-300" />
                    )
                  ) : (
                    row.pro
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TooltipProvider>
    </div>
    </div>
    
  )
}