import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


import useMediaQuery from "@/hooks/useMediaQuery"; // Import your custom media query hook
export const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    { name: "Human Resource Team", color: "bg-gray-700" },
    { name: "Marketing Team", color: "bg-gray-700" },
    { name: "Backend Team", color: "bg-gray-700" },
    { name: "Executive Team", color: "bg-gray-700" },
    { name: "DevOps Team", color: "bg-gray-700" },
    { name: "Design Team", color: "bg-gray-700" },
  ];

  const handleTeamClick = (team) => {
    setSelectedTeam(team);

    setTimeout(() => setSelectedTeam(null), 5000);
  };

  return (
    <section className="container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10 relative min-h-screen">
      <div className="md:hidden">
      <div className="absolute flex flex-col pt-20 gap-3 items-center inset-0">
        {teams.map((team, index) => (
          <button
            key={index}
            className={`bg-gray-700 rounded-full h-12 w-40 text-green-700 text-sm ${team.color}`}
            style={{
              top: `${index * 60}px`, // Adjust spacing between buttons
            }}
            onClick={() => handleTeamClick(team)}
          >
            {team.name}
          </button>
        ))}
        {selectedTeam && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="card rounded-2xl text-green-700 bg-green-50"
            style={{ width: "14rem", position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <img className="card-img-top rounded-lg" src="/cardImg.jpg" alt="Card image cap" />
            <div className="card-body p-3">
              <h5 className="card-title">Meshach Ishaya</h5>
              <p className="card-text font-bold">CEO</p>
            </div>
            <div className="card-body p-3 flex gap-4">
              <a href="#" className="card-link">
                <img src="/linkedIn.jpg" alt="links" className="h-5" />
              </a>
              <a href="#" className="card-link">
                <img src="/Twitter.jpg" alt="links" className="h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
      </div>

      <div className="hidden md:flex">
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            {/* Buttons */}
            <div className="absolute flex justify-center items-center inset-0">
              {teams.map((team, index) => (
                <button
                  key={index}
                  className={`bg-gray-700 rounded-full h-5 w-40 text-green-70 text-sm ${team.color}`}
                  style={{
                    position: "absolute",
                    left: `calc(50% - 40px + 400px * cos(${(index / 6) * (Math.PI * 2)}))`,
                    top: `calc(50% - 40px + 140px * sin(${(index / 6) * (Math.PI * 2)}))`,
                  }}
                  onClick={() => handleTeamClick(team)}
                >
                  {team.name}
                </button>
              ))}
              {selectedTeam && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="card rounded-2xl text-green-70 bg-green-50"
                  style={{ width: "14rem", position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }}
                >
                  <img className="card-img-top rounded-lg" src="/cardImg.jpg" alt="Card image cap" />
                   <div className="card-body p-3">
                     <h5 className="card-title">Meshach Ishaya</h5>
                     <p className="card-text font-bold">CEO</p>
                   </div>
                   <div className="card-body p-3 flex gap-4">
                     <a href="#" className="card-link">
                       <img src="/linkedIn.jpg" alt="links" className="h-5" />
                     </a>
                     <a href="#" className="card-link">
                       <img src="/Twitter.jpg" alt="links" className="h-5" />
                     </a>
                   </div>
                </motion.div>
              )}
            </div>
          </section>
      </div>
    </section>
  );
};



// export const Team = () => {
//   const [selectedTeam, setSelectedTeam] = useState(null);


//   const teams = [
//     { name: "Human Resource Team", color: "bg-gray-700" },
//     { name: "Marketing Team", color: "bg-gray-700" },
//     { name: "Backend Team", color: "bg-gray-700" },
//     { name: "Executive Team", color: "bg-gray-700" },
//     { name: "DevOps Team", color: "bg-gray-700" },
//     { name: "Design Team", color: "bg-gray-700" },
//   ];

//   const handleTeamClick = (team) => {
//     setSelectedTeam(team);

//     setTimeout(() => setSelectedTeam(null), 5000);
//   };

//   return (
//     <section className="container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10 relative min-h-screen">
//       <div className="absolute flex justify-center items-center inset-0">
//               {teams.map((team, index) => (
//                 <button
//                   key={index}
//                   className={`bg-gray-700 rounded-full h-5 w-40 text-green-70 text-sm ${team.color}`}
//                   style={{
//                     position: "absolute",
//                     left: `calc(50% - 40px + 400px * cos(${(index / 6) * (Math.PI * 2)}))`,
//                     top: `calc(50% - 40px + 140px * sin(${(index / 6) * (Math.PI * 2)}))`,
//                   }}
//                   onClick={() => handleTeamClick(team)}
//                 >
//                   {team.name}
//                 </button>
//               ))}
//               {selectedTeam && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="card rounded-2xl text-green-70 bg-green-50"
//                   style={{ width: "14rem", position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }}
//                 >
//                   <img className="card-img-top rounded-lg" src="/cardImg.jpg" alt="Card image cap" />
//                    <div className="card-body p-3">
//                      <h5 className="card-title">Meshach Ishaya</h5>
//                      <p className="card-text font-bold">CEO</p>
//                    </div>
//                    <div className="card-body p-3 flex gap-4">
//                      <a href="#" className="card-link">
//                        <img src="/linkedIn.jpg" alt="links" className="h-5" />
//                      </a>
//                      <a href="#" className="card-link">
//                        <img src="/Twitter.jpg" alt="links" className="h-5" />
//                      </a>
//                    </div>
//                 </motion.div>
//               )}
//       </div>
        

      
//     </section>
//   );
// };










// import { buttonVariants } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// export const Team = () => {
//   const [selectedTeam, setSelectedTeam] = useState(null);

//   const teams = [
//     { name: "Human Resource Team", color: "bg-gray-700" },
//     { name: "Marketing Team", color: "bg-gray-700" },
//     { name: "Backend Team", color: "bg-gray-700" },
//     { name: "Executive Team", color: "bg-gray-700" },
//     { name: "DevOps Team", color: "bg-gray-700" },
//     { name: "Design Team", color: "bg-gray-700" },
//   ];

//   const handleTeamClick = (team) => {
//     setSelectedTeam(team);

//     setTimeout(() => setSelectedTeam(null), 5000);
//   };


//   return (
//     <section
//       id="team"
//       className="container py-24 sm:py-32 sm:w-8/12"
//     >
//       <div className="relative h-full w-full bg-inherit">
//         <div className=" basis-2/5 mt-12 md:mt-32 py-10">
//           <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
//             {/* Buttons */}
//             <div className="absolute flex justify-center items-center inset-0">
//               {teams.map((team, index) => (
//                 <button
//                   key={index}
//                   className={`bg-gray-700 rounded-full h-5 w-40 text-green-70 text-sm ${team.color}`}
//                   style={{
//                     position: "absolute",
//                     left: `calc(50% - 40px + 400px * cos(${(index / 6) * (Math.PI * 2)}))`,
//                     top: `calc(50% - 40px + 140px * sin(${(index / 6) * (Math.PI * 2)}))`,
//                   }}
//                   onClick={() => handleTeamClick(team)}
//                 >
//                   {team.name}
//                 </button>
//               ))}
//               {selectedTeam && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.5 }}
//                   className="card rounded-2xl text-green-70 bg-green-50"
//                   style={{ width: "14rem", position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }}
//                 >
//                   <img className="card-img-top rounded-lg" src="/cardImg.jpg" alt="Card image cap" />
//                    <div className="card-body p-3">
//                      <h5 className="card-title">Meshach Ishaya</h5>
//                      <p className="card-text font-bold">CEO</p>
//                    </div>
//                    <div className="card-body p-3 flex gap-4">
//                      <a href="#" className="card-link">
//                        <img src="/linkedIn.jpg" alt="links" className="h-5" />
//                      </a>
//                      <a href="#" className="card-link">
//                        <img src="/Twitter.jpg" alt="links" className="h-5" />
//                      </a>
//                    </div>
//                 </motion.div>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>

      
//     </section>
//   );
// };










// import { buttonVariants } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Facebook, Instagram, Linkedin } from "lucide-react";

// interface TeamProps {
//   imageUrl: string;
//   name: string;
//   position: string;
//   socialNetworks: SociaNetworkslProps[];
// }

// interface SociaNetworkslProps {
//   name: string;
//   url: string;
// }

// const teamList: TeamProps[] = [
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=35",
//     name: "Emma Smith",
//     position: "Product Manager",
//     socialNetworks: [
//       { name: "Linkedin", url: "http://linkedin.com" },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/",
//       },
//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=60",
//     name: "John Doe",
//     position: "Tech Lead",
//     socialNetworks: [
//       { name: "Linkedin", url: "http://linkedin.com" },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/",
//       },
//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=36",
//     name: "Ashley Ross",
//     position: "Frontend Developer",
//     socialNetworks: [
//       { name: "Linkedin", url: "http://linkedin.com" },

//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=17",
//     name: "Bruce Rogers",
//     position: "Backend Developer",
//     socialNetworks: [
//       { name: "Linkedin", url: "http://linkedin.com" },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/",
//       },
//     ],
//   },
// ];

// export const Team = () => {
//   const socialIcon = (iconName: string) => {
//     switch (iconName) {
//       case "Linkedin":
//         return <Linkedin size="20" />;

//       case "Facebook":
//         return <Facebook size="20" />;

//       case "Instagram":
//         return <Instagram size="20" />;
//     }
//   };

//   return (
//     <section
//       id="team"
//       className="container py-24 sm:py-32 min-h-screen"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold">
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Our Dedicated{" "}
//         </span>
//         Crew
//       </h2>

//       <p className="mt-4 mb-10 text-xl text-muted-foreground">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit!
//       </p>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
//         {teamList.map(
//           ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
//             <Card
//               key={name}
//               className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
//             >
//               <CardHeader className="mt-8 flex justify-center items-center pb-2">
//                 <img
//                   src={imageUrl}
//                   alt={`${name} ${position}`}
//                   className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
//                 />
//                 <CardTitle className="text-center">{name}</CardTitle>
//                 <CardDescription className="text-primary">
//                   {position}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="text-center pb-2">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//               </CardContent>

//               <CardFooter>
//                 {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
//                   <div key={name}>
//                     <a
//                       href={url}
//                       target="_blank"
//                       className={buttonVariants({
//                         variant: "ghost",
//                         size: "sm",
//                       })}
//                     >
//                       <span className="sr-only">{name} icon</span>
//                       {socialIcon(name)}
//                     </a>
//                   </div>
//                 ))}
//               </CardFooter>
//             </Card>
//           )
//         )}
//       </div>
//     </section>
//   );
// };
