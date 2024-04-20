// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { TitleForm } from "./_components/title-form";
import { NameForm } from "./_components/name-form";
import { ContentForm } from "./_components/content-form";
import { ImageForm } from "./_components/image-form";
import { CategoryForm } from "./_components/category-form";
// import { PriceForm } from "./_components/price-form";
import { AttachmentForm } from "./_components/attachment-form";
// import { ChaptersForm } from "./_components/chapters-form";
import { Actions } from "./_components/actions";

const CourseIdPage = async ({ params }: { params: { id: string } }) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  const event = await db.event.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!event) {
    return redirect("/");
  }

  const requiredFields = [
    event.eventDate,
    event.image,
    event.location,
    event.name,
    event,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!event.published && (
        <Banner label="This course is unpublished. It will not be visible to the students." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Event setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params.id}
            isPublished={event.published}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your event</h2>
            </div>
            <NameForm initialData={event} id={String(event.id)} />
            <TitleForm initialData={event} id={String(event.id)} />
            <ContentForm initialData={event} id={String(event.id)} />
            <ImageForm initialData={event} id={String(event.id)} />
            <CategoryForm
              initialData={event}
              id={String(event.id)}
              options={categories.map((category: { name: any; id: any }) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              {/* <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Event chapters</h2>
              </div> */}
              {/* <ChaptersForm initialData={course} courseId={course.id} /> */}
            </div>
            <div>
              {/* <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Sell your course</h2>
              </div> */}
              {/* <PriceForm initialData={course} courseId={course.id} /> */}
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">Resources & Attachments</h2>
              </div>
              <AttachmentForm initialData={event} courseId={String(event.id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
