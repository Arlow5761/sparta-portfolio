import {NavigationLinks} from "./navigationlinks"
import {SectionThumbnails} from "./sectionthumbnails"

export default function SectionHeader() {
    return (
        <div className="bg-blue-950 flex flex-col h-2/5 landscape:w-2/5 landscape:h-full landscape:flex-row">
            <NavigationLinks/>
            <SectionThumbnails/>
        </div>
    );
}
