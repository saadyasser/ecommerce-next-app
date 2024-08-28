import { PRODUCTS } from "@/contants"



import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({ result: PRODUCTS })
}