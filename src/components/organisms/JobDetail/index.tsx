import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React from "react";

type Props = {};

const JobDetail = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold mb-5">Description</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                autem. Debitis eaque placeat aspernatur ex fugit aut repellat
                asperiores explicabo! Et quos tempore est quis, animi autem
                beatae officiis nemo voluptas earum. Optio cumque ut
                voluptatibus perspiciatis quibusdam beatae itaque.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-5">Responsibilities</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                autem. Debitis eaque placeat aspernatur ex fugit aut repellat
                asperiores explicabo! Et quos tempore est quis, animi autem
                beatae officiis nemo voluptas earum. Optio cumque ut
                voluptatibus perspiciatis quibusdam beatae itaque.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-5">WhoYouAre</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                autem. Debitis eaque placeat aspernatur ex fugit aut repellat
                asperiores explicabo! Et quos tempore est quis, animi autem
                beatae officiis nemo voluptas earum. Optio cumque ut
                voluptatibus perspiciatis quibusdam beatae itaque.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold mb-5">NiceToHaves</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                autem. Debitis eaque placeat aspernatur ex fugit aut repellat
                asperiores explicabo! Et quos tempore est quis, animi autem
                beatae officiis nemo voluptas earum. Optio cumque ut
                voluptatibus perspiciatis quibusdam beatae itaque.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About This Role</div>
          <div className="shadow p-3 text-center my-6">
            1 <span className="text-gray-500">of 10 Capacity</span>
            <Progress className="mt-3" colorBar="" value={10} />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between ">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Aug 2023</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">12 Aug 2023</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between ">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000 USD</div>
            </div>
          </div>
          <Separator className="" />
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">
                Required Skills
            </div>

            <div className="space-x-5">
                {['HTML','JAVASCRIPT','REACT'].map((item,i) => (
                <Badge className="rounded-md p-1.5" key={i}>{item}</Badge>
                    ))}
            </div>
          </div>
          <Separator/>
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">
                Category
            </div>

            <div className="space-x-5">
                <Badge className="rounded-xl p-2 bg-green-200 text-green-400" variant={"outline"}>Design</Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8"/>
      <div>
        <h1 className="text-3xl font-semibold">
            Perks & Benefits
        </h1>
        <p className="text-gray-500">This Job Comes with several perks and benefits</p>
        <div className="grid grid-cols-4 gap-5 mt-9">
            {[0,1,2].map((item)=>(
                <div key={item}>
                    <PartyPopperIcon className="w-10 h-10 text-primary mb-6"/>

                    <h1 className="text-lg font-semibold mb-3">Full HealthCare</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt reiciendis placeat reprehenderit magni aspernatur accusamus nam? Temporibus, quae doloremque?</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
