import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET_AUTH });

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_WAITLIST_DATABASE_ID!,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: body?.email,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}
