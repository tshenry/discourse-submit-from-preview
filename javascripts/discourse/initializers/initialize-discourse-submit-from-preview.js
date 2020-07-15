import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "submit-from-preview",
  initialize(container) {
    withPluginApi("0.8", (api) => {
      api.modifyClass("controller:composer", {
        actions: {
          save() {
            if (this.site.mobileView && this.showPreview) {
              this.toggleProperty("showPreview");
            }
            this.save();
          },
        },
      });
    });
  },
};
