import { Check, HelpCircle, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Pricing() {
  const tiers = [
    {
      name: "Basic Report",
      price: "$49.99",
      description: "For personal projects and hobby developers",
      features: ["1 user", "5 projects", "Basic analytics", "Community support"],
    },
    {
      name: "Full Report",
      price: "$129.99",
      description: "For professionals and small teams",
      features: ["5 users", "Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"],
    },
  ]

  const featureComparison = [
    { feature: "Users", hobby: "1", pro: "5" },
    { feature: "Projects", hobby: "5", pro: "Unlimited" },
    { feature: "Analytics", hobby: "Basic", pro: "Advanced" },
    { feature: "Support", hobby: "Community", pro: "Priority" },
    { feature: "Custom Domains", hobby: false, pro: true },
    { feature: "Collaboration Tools", hobby: false, pro: true },
    { feature: "API Access", hobby: false, pro: true },
  ]

  return (
    <div className="bg-[#FCFCFC] py-16 lg:py-32 max-w-7xl mx-auto">
      <div className="site-wrapper">
        <div className="flex flex-col gap-6 mb-16">
          <h2 className="text-3xl font-bold text-center w-full md:w-4/5 mx-auto lg:text-5xl">Get started with a website analysis report to see how your website currently performs</h2>
          <p className="text-lg font-light w-full md:w-4/5 mx-auto text-center">We offer two levels of reporting. A simple report that shows basic metrics for your websites health and performance, and a full report which generates a comprehensive report on all metrics relating to SEO</p>
        </div>
      <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">{tier.price}<span className="text-xs font-light text-gray-500">/ NZD</span></p>
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
              <Button className="w-full">{tier.name === "Hobby" ? "Get Started" : "Get Started"}</Button>
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
                  {typeof row.hobby === "boolean" ? (
                    row.hobby ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="h-5 w-5 text-gray-300" />
                    )
                  ) : (
                    row.hobby
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