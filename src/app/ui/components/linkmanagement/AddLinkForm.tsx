"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Field } from "react-hook-form";
import { motion } from "framer-motion";

// Schema
const FormDataSchema = z.object({
  contentName: z
    .string()
    .min(2, "Content Name must be at least 2 characters long")
    .max(20, "Content Name must be at most 20 characters long"),
  contentDescription: z
    .string()
    .min(2, "Content Description must be at least 2 characters long")
    .max(40, "Content Description must be at most 40 characters long"),
  hashtags: z.string().refine(
    (value) => {
      const categories = value.split(",").map((category) => category.trim());
      return (
        categories.length > 0 && categories.every((category) => category !== "")
      );
    },
    {
      message: "At least one category is required separated by commas.",
    }
  ),
  linkAddress: z
    .string()
    .min(3, "Link Address must be at least 3 characters long"),
  thumbnail: z.string(),
  categoryName: z
    .string()
    .min(2, "Category Name must be at least 2 characters long")
    .max(20, "Category Name must be at most 20 characters long"),

  // Permission fields
  usernameForAuthentication: z.string(),
  passwordForAuthentication: z.string(),
  defaultPort: z.string(),
  sharingAbility: z.boolean(),
  externalSharingAbility: z.boolean(),
  sharingDeptLevel: z.string(),

  // Advanced fields
  publicationDate: z.string(),
  publicationTime: z.string(),
  expirationDate: z.string(),
  expirationTime: z.string(),
});

// Type
type Inputs = z.infer<typeof FormDataSchema>;

// Steps
const steps = [
  {
    step: 0,
    title: "Basic Information",
    fields: [
      "contentName",
      "contentDescription",
      "hashtags",
      "thumbnail",
      "categoryName",
    ],
  },
  {
    step: 1,
    title: "Permissions",
    fields: [
      "usernameForAuthentication",
      "passwordForAuthentication",
      "defaultPort",
      "sharingAbility",
      "externalSharingAbility",
      "sharingDeptLevel",
    ],
  },

  {
    step: 2,
    title: "Advanced",
    fields: [
      "publicationDate",
      "publicationTime",
      "expirationDate",
      "expirationTime",
    ],
  },
  { step: 3, title: "Completion" },
];

// ******************************************************
// AddLinkForm
export default function AddLinkForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  type FieldName = keyof Inputs;

  async function handleNextStep() {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(handleSkipAndCreate)();
    }
  }

  const handleSkipAndCreate: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setCurrentStep(3);
  };

  function handlePrevious() {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      console.log(currentStep - 1);
      setCurrentStep(currentStep - 1);
    }
  }

  const formClass =
    "w-full max-w-[500px] min-w-[300px] h-[400px] panel-light flex flex-col gap-2  p-4 overflow-hidden";
  const longTextInputClass = "text-xs w-[250px] ";
  const lineClass = "grow border border-2 border-blue-800";

  const circleCompleteClass =
    "w-[20px] h-[20px]  rounded-full bg-blue-800 border-4 outline outline-blue-800 ";
  const circleIncompleteClass =
    "w-[20px] h-[20px]  rounded-full border-4 outline  outline-blue-800";
  const circleCurrentClass =
    "w-[20px] h-[20px]  rounded-full bg-gray-400 border-4 outline  outline-blue-800";
  return (
    <form onSubmit={handleSubmit(handleSkipAndCreate)} className={formClass}>
      {currentStep === 0 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-2 h-full"
        >
          {/* Content Name */}
          <div className="">
            <input
              type="text"
              placeholder="Content Name"
              className={longTextInputClass}
              id="contentName"
              {...register("contentName")}
            />
            {errors.contentName && (
              <p className="text-red-500 text-xs">
                {errors.contentName.message}
              </p>
            )}
          </div>
          {/* Content Description */}
          <div className="">
            <input
              type="text"
              placeholder="Content Description"
              className={longTextInputClass}
              id="contentDescription"
              {...register("contentDescription")}
            />
            {errors.contentDescription && (
              <p className="text-red-500 text-xs">
                {errors.contentDescription.message}
              </p>
            )}
          </div>
          {/* Hashtags (Separate By Comma) */}
          <div className="">
            <input
              type="text"
              placeholder="Hashtags (Separate By Comma)"
              className={longTextInputClass}
              id="hashtags"
              {...register("hashtags")}
            />
            {errors.hashtags && (
              <p className="text-red-500 text-xs">{errors.hashtags.message}</p>
            )}
          </div>
          {/* Link Address*/}
          <div className="">
            <input
              type="text"
              placeholder="Link Address"
              className={longTextInputClass}
              id="linkAddress"
              {...register("linkAddress")}
            />
            {errors.linkAddress && (
              <p className="text-red-500 text-xs">
                {errors.linkAddress.message}
              </p>
            )}
          </div>
          {/* Thumbnail */}
          <div className="">
            <input
              type="text"
              placeholder="Thumbnail"
              className={longTextInputClass}
              id="thumbnail"
              {...register("thumbnail")}
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-xs">{errors.thumbnail.message}</p>
            )}
          </div>
          {/* Category Name */}
          <div className="">
            <input
              type="text"
              placeholder="Category Name"
              className={longTextInputClass}
              id="categoryName"
              {...register("categoryName")}
            />
            {errors.categoryName && (
              <p className="text-red-500 text-xs">
                {errors.categoryName.message}
              </p>
            )}
          </div>
          <div className="flex grow border-3 border-red-400"></div>
        </motion.div>
      )}
      {currentStep === 1 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-2 h-full"
        >
          {/* Username For Authentication */}
          <div className="">
            <input
              type="text"
              placeholder="Username For Authentication"
              className={longTextInputClass}
              id="usernameForAuthentication"
              {...register("usernameForAuthentication")}
            />
            {errors.usernameForAuthentication && (
              <p className="text-red-500 text-xs">
                {errors.usernameForAuthentication.message}
              </p>
            )}
          </div>
          {/* Password For Authentication */}
          <div className="">
            <input
              type="text"
              placeholder="Password For Authentication"
              className={longTextInputClass}
              id="passwordForAuthentication"
              {...register("passwordForAuthentication")}
            />
            {errors.passwordForAuthentication && (
              <p className="text-red-500 text-xs">
                {errors.passwordForAuthentication.message}
              </p>
            )}
          </div>
          {/* Default Port */}
          <div className="">
            <input
              type="text"
              placeholder="Default Port"
              className={longTextInputClass}
              id="defaultPort"
              {...register("defaultPort")}
            />
            {errors.defaultPort && (
              <p className="text-red-500 text-xs">
                {errors.defaultPort.message}
              </p>
            )}
          </div>
          {/* Sharing Ability CheckBox */}
          <div className="">
            <div className="flex items-center gap-4">
              <label htmlFor="sharing-ability">Sharing Ability</label>
              <input
                type="checkbox"
                id="sharing-ability"
                {...register("sharingAbility")}
              />
            </div>
            {errors.sharingAbility && (
              <p className="text-red-500 text-xs">
                {errors.sharingAbility.message}
              </p>
            )}
          </div>
          {/* External Sharing Ability CheckBox */}
          <div className="">
            <div className="flex items-center gap-4">
              <label htmlFor="externalSharingAbility">
                External Sharing Ability
              </label>
              <input
                type="checkbox"
                id="externalSharingAbility"
                {...register("externalSharingAbility")}
              />
            </div>
            {errors.externalSharingAbility && (
              <p className="text-red-500 text-xs">
                {errors.externalSharingAbility.message}
              </p>
            )}
          </div>
          {/* Sharing Dept Level Options*/}
          <div className="flex items-center gap-4">
            <label htmlFor="sharingDeptLevel">Sharing Dept Level</label>
            <select
              id="sharingDeptLevel"
              {...register("sharingDeptLevel")}
              className="text-xs"
            >
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>
          <div className="flex grow"></div>
        </motion.div>
      )}
      {currentStep === 2 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grow flex flex-col gap-2 "
        >
          {/* Publication Date And Time */}
          <div className="flex gap-2">
            <label htmlFor="publication-date" className="text-xs">
              Publication Date
            </label>
            <input
              type="date"
              className="text-xs"
              id="publicationDate"
              {...register("publicationDate")}
            />
            <label htmlFor="publicationTime" className="text-xs">
              Publication Time
            </label>
            <input
              type="time"
              className="text-xs"
              id="publicationTime"
              {...register("publicationTime")}
            />
          </div>
          {/* Expiration Date And Time */}
          <div className="flex gap-2">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="date"
              className="text-xs"
              id="expirationDate"
              {...register("expirationDate")}
            />
            <label htmlFor="expirationTime">Expiration Time</label>
            <input
              type="time"
              className="text-xs"
              id="expirationTime"
              {...register("expirationTime")}
            />
          </div>
        </motion.div>
      )}
      {currentStep === 3 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-2 grow items-start justify-center "
        >
          <h3 className="text-center w-full">Link Created Successfully</h3>
        </motion.div>
      )}
      {/* Controls for step 0, 1, and 2 */}
      {currentStep < 4 && (
        <div className="w-full flex flex-col gap-2">
          <div className="w-full items-center content-between flex gap-2 pl-10 pr-10">
            <div
              className={`${currentStep === 0 && circleCurrentClass} ${
                currentStep > 0 && circleCompleteClass
              }`}
            ></div>
            <div className={lineClass}></div>
            <div
              className={`${currentStep === 0 && circleIncompleteClass} ${
                currentStep === 1 && circleCurrentClass
              } ${currentStep > 1 && circleCompleteClass}`}
            ></div>
            <div className={lineClass}></div>
            <div
              className={`${currentStep === 0 && circleIncompleteClass} ${
                currentStep === 1 && circleIncompleteClass
              } ${currentStep === 2 && circleCurrentClass} ${
                currentStep > 2 && circleCompleteClass
              }`}
            ></div>
          </div>
          <div className="w-full flex items-center justify-between text-center">
            <h3 className="w-24 text-xs ">Basic Information</h3>
            <h3 className="w-24 text-xs text-center ">Permissions</h3>
            <h3 className="w-24 text-xs ">Advanced</h3>
          </div>
        </div>
      )}
      {currentStep < 3 && (
        <div className="flex gap-2">
          {currentStep > 0 && <button onClick={handlePrevious}>Back</button>}
          <div className="flex-grow"></div>
          <div className="flex gap-4">
            {currentStep < 2 && <button onClick={handleNextStep}>Next</button>}
            <input type="submit" value="Skip & Create" />
          </div>
        </div>
      )}
    </form>
  );
}
// ******************************************************
