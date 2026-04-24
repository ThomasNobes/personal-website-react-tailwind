import { BookOpenText } from "lucide-react";
import { useState } from "react";

function getYearsDifference(targetDate) {
    const now = new Date();
    const date = new Date(targetDate);

    let years = now.getFullYear() - date.getFullYear();

    const hasHadAnniversaryThisYear =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());

    if (!hasHadAnniversaryThisYear) {
    years--;
    }
    
    return years;
}

export const HobbiesSection = () => {
    const [cvDownloaded, setCvDownloaded] = useState(false);

    const handleCvDownload = () => {
        setCvDownloaded(true);
    };
    
    const years = getYearsDifference("2020-01-01");
    
    return (
        <section id="hobbies" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Outside the Classroom: <span className="text-primary">Hobbies</span> 
                </h2>
                
                <p>
                    With all that said, I want to share a bit about <span className="text-primary-emphasis">who I am in the real-world. </span>
                    Outside of my academic pursuits, I love to keep busy and learn new things.
                    I try to keep healthy and active (with varying success), but I certainly spend a good amount of time playing games, watching YouTube, and creating: 3D modelling, animating, and much more.
                    Here's some things I enjoy!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Bouldering</h4>
                                    <img
                                        src={"/hobbies/bouldering.jpg"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Visualisation</h4>
                                    <img
                                        src={"/hobbies/visualisation.jpeg"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Video Games</h4>
                                    <img
                                        src={"/hobbies/videogames.png"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Animation</h4>
                                    <img
                                        src={"/hobbies/animation.jpeg"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Blender</h4>
                                    <img
                                        src={"/hobbies/blender.jpeg"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Go (Baduk / Igo / Weiqi ... )</h4>
                                    <img
                                        src={"/hobbies/go.jpg"}
                                        className="w-56 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};