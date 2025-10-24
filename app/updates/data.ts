// app/updates/data.ts
export type Article = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: { type: "paragraph" | "heading"; text: string }[]
  }
  
  export const updates: Article[] = [
    {
      slug: "announcing-hands",
      title: "Announcing Hands",
      date: "2025-05-28",
      excerpt:
        "Today, we're announcing Hands, your intelligent, personal cooking assistant.",
      content: [
        {
          type: "paragraph",
          text: "Today, we're announcing Hands, your intelligent, personal cooking assistant. Hands represents a fundamental shift in how we interact with recipes and cooking guidance.",
        },
        {
          type: "heading",
          text: "A New Approach to Cooking",
        },
        {
          type: "paragraph",
          text: "Traditional recipe apps present you with a wall of text and expect you to figure it out. Hands is different. It understands context, adapts to your kitchen, and guides you through each step with intelligence and care.",
        },
        {
          type: "heading",
          text: "Built for Real Kitchens",
        },
        {
          type: "paragraph",
          text: "We designed Hands with the reality of home cooking in mind. It accounts for ingredient substitutions, equipment variations, and timing adjustments.",
        },
        {
          type: "paragraph",
          text: "Join our waitlist to be among the first to experience the future of cooking assistance.",
        },
      ],
    },
  ]
  