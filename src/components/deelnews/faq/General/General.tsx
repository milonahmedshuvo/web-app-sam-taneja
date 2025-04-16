import { Accordion } from "./Accordion"




export default function HomeGeneralCollapse() {

  const faqItems = [
    {
      title: 'How often do you update the front page / How does the "new" flag work?',
      content: (
        <p>
          Our writers work around the clock seven days a week. To help readers identify new content, a new flag is
          displayed beside each deal that was posted since your last visit (this disappears if you use our sort by
          time version of the front page). For your first visit of the day, all deals are flagged as{" "}
          <span className="font-semibold">new</span> As you return throughout the day, the new flag only appears on
          the deals that have been added since your last visit.
        </p>
      ),
    },
    {
      title: "Why are some DealNews links unreachable?",
      content: (
        <p>
          Sometimes links may be temporarily unavailable due to high traffic or technical issues with the merchants
          website. We regularly check our links, but if you find a broken one, please let us know and we ll update it as
          soon as possible.
        </p>
      ),
    },
    {
      title: "Why does it sometimes take so long to post sweepstakes winners?",
      content: (
        <p>
          Posting sweepstakes winners involves several verification steps to ensure compliance with regulations. We need
          to contact winners, verify their eligibility, and sometimes wait for responses. We strive to post results as
          quickly as possible once all verifications are complete.
        </p>
      ),
    },
    {
      title: "What is Hotness?",
      content: (
        <p>
          Hotness is our proprietary rating system that indicates how good a deal is compared to historical prices and
          current market conditions. A higher hotness score means we believe its an exceptional value that may not last
          long.
        </p>
      ),
    },
    {
      title: "What's an Editors' Choice?",
      content: (
        <p>
          Editors Choice is a designation our editorial team gives to deals that are truly exceptional. These are
          typically significant discounts on quality products, rare promotions, or outstanding value propositions that
          we believe deserve special attention.
        </p>
      ),
    },
  ]

  
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">General</h1>
        <Accordion items={faqItems} defaultOpen={0} />
      </div>
    </main>
  )
}
