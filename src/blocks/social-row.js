import metadata from "./social-row-block.json";
const { name } = metadata;
export { metadata, name };

export const setting = {
    icon:"smiley",
    edit(){
        return
        <div>Child Element</div>;
    },
    save(){
        return
        <div>Child Element</div>;
    }
}