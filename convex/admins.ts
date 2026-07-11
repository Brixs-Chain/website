import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAdmins = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("admins").order("desc").collect();
  },
});

export const addAdmin = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    role: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (existing) {
      throw new Error("Admin with this email already exists.");
    }
    
    return await ctx.db.insert("admins", {
      email: args.email,
      password: args.password,
      role: args.role,
      createdAt: Date.now(),
    });
  },
});

export const removeAdmin = mutation({
  args: { id: v.id("admins") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const checkLogin = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Hardcoded fallback for the original admin if they get locked out
    if (args.email === 'SONISHRIYASH@GMAIL' && args.password === 'Soni#2023') {
      return { success: true, role: 'superadmin' };
    }

    const admin = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (admin && admin.password === args.password) {
      return { success: true, role: admin.role };
    }
    
    return { success: false };
  },
});
