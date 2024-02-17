import { NextRequest, NextResponse } from "next/server";
import prisma from "@/../prisma/client";
import { createCommentSchema } from "../../utils/ValidationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCommentSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });
  const createComment = await prisma.comment.create({
    data: validation.data,
  });
  return NextResponse.json(createComment, {
    status: 201,
  });
}
