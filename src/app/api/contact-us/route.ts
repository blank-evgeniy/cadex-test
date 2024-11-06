import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name }: { name?: string } = await request.json();

  if (!name) {
    return NextResponse.json({ message: "Name is required." }, { status: 400 });
  }

  const responseMessage = `Thank you for your interest, ${name}`;

  return NextResponse.json({ message: responseMessage });
}
