import React from "react";

const servicecard = [
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
  {
    name: "IT consulting service",
    desc: "Explore how thoughtful layout and digital storytelling can transform online spaces.",
  },
];

function Servicecard() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-39 h-100  ">
      {servicecard.map((i,index) => (
              
          <div
              key={index}
              className="col-span-1 bg-amber-500 ">
                  <div></div>
                  <div>{i.name}</div>
                  <div>{i.desc}</div>
                  
              </div>
             
              
            ))}
            </div>
    </div>
  );
}

export default Servicecard;
