import SliderDrawerCompDesign from "generated/my-components/SliderDrawerComp"

export default class SliderDrawerComp extends SliderDrawerCompDesign {
    pageName?: string | undefined;
    // Constructor
    constructor(props?: any, pageName?: any) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
};