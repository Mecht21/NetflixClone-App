/**
 * Prisma Database Client
 *
 * This module exports the Prisma database client instance, which is responsible for interacting with the database.
 *
 * @module
 * @example
 * import prisma from "@/path/to/prisma-client";
 *
 * // Example usage to query the database
 * const users = await prisma.user.findMany();
 */

import { Prisma, PrismaClient } from "@prisma/client";

// Global Prisma client instance or create a new one
const client = global.prismadb || new PrismaClient();

// Set the global Prisma client instance in production to reuse connections
if(process.env.NODE_ENV === 'production') global.prismadb = client;

// Export the Prisma client as the default export
export default client;