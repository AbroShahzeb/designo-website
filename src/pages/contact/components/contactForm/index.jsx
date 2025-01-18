import {
  Button,
  CustomInput,
  CustomTextArea,
} from "../../../../generalComponents";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary-peach px-6 py-[72px] overflow-hidden  relative mb-[120px] lg:mb-[160px] md:mx-10 md:rounded-[15px] md:px-[58px] md:py-[71px] lg:px-[96px] lg:py-[54px] xl:max-w-[1111px] xl:mx-auto "
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex opacity-[0.3089] md:hidden">
        <div className="size-[292px] rounded-full bg-circle-pattern -rotate-90"></div>
        <div className="size-[292px] rounded-full bg-circle-pattern"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute -bottom-[150px] -right-[80px]  opacity-[0.3089] md:-left-[121.55px] md:-top-[81px] md:bottom-auto md:right-auto lg:left-0 lg:bottom-0 lg:top-auto">
        <div className="size-[292px] md:size-[640px] rounded-full bg-circle-pattern "></div>
      </div>

      <div className="flex flex-col gap-12 md:gap-10 relative z-20 lg:flex-row lg:gap-0 lg:items-center">
        <div className="flex flex-col text-center gap-6 md:gap-8 text-primary-white md:text-left lg:w-[540px] ">
          <h2 className="text-[32px] leading-[36px] font-medium md:text-[48px] md:leading-[48px]">
            Contact Us
          </h2>
          <p className="text-[15px] leading-[25px] md:text-base lg:max-w-[445px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-1">
          <CustomInput
            placeholder="Name"
            name="name"
            register={register}
            validationRules={{ required: "Can't be empty" }}
            error={errors?.name?.message}
          />
          <CustomInput
            placeholder="Email Address"
            name="email"
            register={register}
            validationRules={{
              required: "Can't be empty",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            error={errors?.email?.message}
          />
          <CustomInput
            placeholder="Phone"
            name="phone"
            register={register}
            validationRules={{
              required: "Can't be empty",
            }}
            error={errors?.phone?.message}
          />
          <CustomTextArea
            placeholder="Your Message"
            name="message"
            register={register}
            validationRules={{
              required: "Can't be empty",
            }}
            error={errors?.message?.message}
          />
          <div className="self-center mt-6 md:self-end md:mt-0">
            <Button type="submit" label="Submit" variant="secondary" />
          </div>
        </div>
      </div>
    </form>
  );
};
