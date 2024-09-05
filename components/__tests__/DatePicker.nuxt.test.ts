import { describe, it, expect} from "vitest";
import { mount } from "@vue/test-utils";
import DatePicker from "../DatePicker.vue";

it("should render a date picker", () => {
  const wrapper = mount(DatePicker);
  // const datePicker = wrapper.find("['data-testid=date-picker']");

  // expect(datePicker.exists()).toBe(true);
});