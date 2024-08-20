import { PRODUCTS } from "@/contants"

export async function GET() {
    return Response.json(PRODUCTS);
}