import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    content: v.string(),
    templateImage: v.string(), // Image URL
    author: v.optional(v.string()),
    createdAt: v.number(),
    language: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    sourceLinks: v.optional(v.array(v.string())),
    isPublished: v.boolean(),
    isFeatured: v.optional(v.boolean()),
    showNewsletter: v.optional(v.boolean()),
    views: v.optional(v.number()),
    slug: v.optional(v.string()),
  }).index("by_creation", ["createdAt"]).index("by_slug", ["slug"]),
  
  admins: defineTable({
    email: v.string(),
    password: v.string(), // normally hashed, but we'll keep it simple for now based on current impl
    role: v.string(), // e.g. "superadmin", "editor"
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
