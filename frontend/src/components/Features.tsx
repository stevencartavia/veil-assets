import { FC } from "react";
import { LucideIcon, Globe, Lock, Settings, Link, GlobeLock, Repeat } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const features: FeatureProps[] = [
    { title: "Portfolio Privacy", description: "Securely manage your assets with end-to-end encryption, ensuring complete confidentiality.", icon: Globe },
    { title: "Privacy-Preserving Rebalancing", description: " Adjust and optimize your portfolio without exposing transaction details.", icon: Lock },
    { title: "Private Yield Farming", description: "Earn rewards with shielded strategies, protecting your financial activity from prying eyes.", icon: Settings },
    { title: "Cross-Chain Bridging", description: "Transfer assets seamlessly across blockchains while maintaining privacy and security.", icon: Link },
    { title: "Encrypted Events & Hybrid Contract Architecture ", description: "Prevent information leakage with advanced encryption and private execution.", icon: GlobeLock },
    { title: "Aztec-Powered Security", description: "Leverage cutting-edge account abstraction for seamless and confidential transactions.", icon: Repeat },
];

const Features: FC = () => {
    return (
        <Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#111111] text-white">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-[#111] p-6 rounded-lg shadow-md border border-gray-800">
                    <feature.icon className="w-10 h-10 text-primary" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </Fade>
    );
};

export default Features;
