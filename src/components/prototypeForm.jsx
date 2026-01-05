"use client";
import React, { useState } from "react";

// Questions configuration
const questionsConfig = [
  {
    id: "q1",
    question: "Are you able to make and receive calls?",
    helpText: "Check your device for cellular network connectivity issues.",
    type: "radio",
    options: [
      { label: "Yes", value: "yes", deduction: 0 },
      { label: "No", value: "no", deduction: 500 },
    ],
    evaluationField: "deviceDetails",
    evaluationLabel: "Able to Make and Receive Calls",
  },
  {
    id: "q2",
    question: "Is your device's touch screen working properly?",
    helpText: "Check the touch screen functionality of your phone.",
    type: "radio",
    options: [
      { label: "Yes", value: "yes", deduction: 0 },
      { label: "No", value: "no", deduction: 400 },
    ],
    evaluationField: "screenCondition",
    evaluationLabel: "Touch Working",
  },
  {
    id: "q3",
    question: "Is your phone's screen original?",
    helpText:
      'Pick "Yes" if screen was never changed or was changed by Authorized Service Center. Pick "No" if screen was changed at local shop.',
    type: "radio",
    options: [
      { label: "Yes", value: "yes", deduction: 0 },
      { label: "No", value: "no", deduction: 1000 },
    ],
    evaluationField: "deviceDetails",
    evaluationLabel: "Screen Original",
  },
  {
    id: "q4",
    question: "Select screen/body defects that are applicable!",
    helpText: "Please provide correct details",
    type: "checkbox",
    options: [
      {
        label: "Broken/scratch on device screen",
        value: "Broken screen",
        deduction: 600,
      },
      {
        label: "Dead Spot/Visible line and Discoloration on screen",
        value: "Dead spot",
        deduction: 450,
      },
      {
        label: "Scratch/Dent on device body",
        value: "Scratch body",
        deduction: 300,
      },
      {
        label: "Device panel missing/broken",
        value: "Panel broken",
        deduction: 550,
      },
    ],
    evaluationField: "screenCondition",
    evaluationLabel: "Defects",
  },
];

const PrototypeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalDeduction, setTotalDeduction] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const basePrice = 5700;
  const processingFee = 99;

  const deviceInfo = {
    name: "Apple iPhone 8",
    variant: "(2 GB/128 GB)",
  };

  const handleAnswerChange = (questionId, value, deduction) => {
    const currentQuestion = questionsConfig[currentStep];

    if (currentQuestion.type === "radio") {
      setAnswers({
        ...answers,
        [questionId]: { value, deduction },
      });
    } else if (currentQuestion.type === "checkbox") {
      const currentAnswers = answers[questionId] || { value: [], deduction: 0 };
      const valueArray = currentAnswers.value;
      const isSelected = valueArray.includes(value);

      if (isSelected) {
        const newValue = valueArray.filter((v) => v !== value);
        const newDeduction = currentAnswers.deduction - deduction;
        setAnswers({
          ...answers,
          [questionId]: { value: newValue, deduction: newDeduction },
        });
      } else {
        setAnswers({
          ...answers,
          [questionId]: {
            value: [...valueArray, value],
            deduction: currentAnswers.deduction + deduction,
          },
        });
      }
    }
  };

  const calculateTotalDeduction = () => {
    return Object.values(answers).reduce(
      (total, answer) => total + (answer.deduction || 0),
      0
    );
  };

  const handleContinue = () => {
    const currentQuestion = questionsConfig[currentStep];
    const currentAnswer = answers[currentQuestion.id];

    if (
      !currentAnswer ||
      (currentQuestion.type === "checkbox" && currentAnswer.value.length === 0)
    ) {
      alert("Please select an answer before continuing");
      return;
    }

    const newDeduction = calculateTotalDeduction();
    setTotalDeduction(newDeduction);

    if (currentStep < questionsConfig.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRecalculate = () => {
    setAnswers({});
    setTotalDeduction(0);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const getEvaluationData = (field) => {
    return questionsConfig
      .filter((q) => q.evaluationField === field)
      .map((q) => {
        const answer = answers[q.id];
        if (!answer) return null;

        let displayValue = "";
        if (q.type === "radio") {
          displayValue =
            answer.value === "yes"
              ? "Yes"
              : answer.value === "no"
              ? "No"
              : answer.value;
        } else if (q.type === "checkbox") {
          displayValue = answer.value.length > 0 ? answer.value.join(", ") : "";
        }

        return {
          label: q.evaluationLabel,
          value: displayValue,
        };
      })
      .filter((item) => item !== null && item.value);
  };

  const currentQuestion = questionsConfig[currentStep];
  const currentAnswer = answers[currentQuestion?.id];
  const totalAmount = basePrice - totalDeduction - processingFee;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={handleRecalculate}
            className="mb-4 hover:cursor-pointer flex items-center text-gray-600 hover:text-gray-800"
          >
            <span className="mr-2">←</span> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{deviceInfo.image}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {deviceInfo.name}{" "}
                    <span className="font-normal text-gray-600">
                      {deviceInfo.variant}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Selling price:</p>
                  <p className="text-4xl font-bold text-red-500">
                    ₹{totalAmount}
                  </p>
                </div>
              </div>

              <button
                onClick={handleRecalculate}
                className="text-green-600 hover:cursor-pointer font-medium border-b-2 border-green-600 pb-1 mb-8"
              >
                Recalculate
              </button>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-2xl"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Fast</p>
                    <p className="text-sm text-gray-600">Payments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Free</p>
                    <p className="text-sm text-gray-600">Pickup</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl"></div>
                  <div>
                    <p className="font-semibold text-gray-800">100% Safe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Price Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Base Price</span>
                  <span>₹{basePrice}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Processing Fee</span>
                  <span className="text-red-500">
                    -₹{processingFee}{" "}
                    <span className="line-through text-gray-400">₹100</span>
                  </span>
                </div>
                {totalDeduction > 0 && (
                  <div className="flex justify-between text-gray-700">
                    <span>Deductions</span>
                    <span className="text-red-500">-₹{totalDeduction}</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>

              <button className="w-full hover:cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
                Sell Now
              </button>

              <button className="w-full hover:cursor-pointer mt-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎟️</span>
                  <span>Apply Coupons</span>
                </div>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Tell us more about your device?
          </h1>
          <h3 className="text-gray-600 mb-8">
            Please answer a few questions about your device.
          </h3>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {currentStep + 1}. {currentQuestion.question}
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              {currentQuestion.helpText}
            </p>

            <div className="space-y-3">
              {currentQuestion.type === "radio" ? (
                <div className="flex gap-4">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 cursor-pointer border-2 rounded-lg p-4 transition-all ${
                        currentAnswer?.value === option.value
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name={currentQuestion.id}
                          value={option.value}
                          checked={currentAnswer?.value === option.value}
                          onChange={() =>
                            handleAnswerChange(
                              currentQuestion.id,
                              option.value,
                              option.deduction
                            )
                          }
                          className="w-5 h-5 text-green-500 cursor-pointer"
                        />
                        <span className="ml-3 text-gray-800 font-medium">
                          {option.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {currentQuestion.options.map((option) => {
                    const isChecked =
                      currentAnswer?.value?.includes(option.value) || false;
                    return (
                      <label
                        key={option.value}
                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${
                          isChecked
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() =>
                              handleAnswerChange(
                                currentQuestion.id,
                                option.value,
                                option.deduction
                              )
                            }
                            className="w-5 h-5 text-green-500 cursor-pointer mt-0.5"
                          />
                          <span className="ml-3 text-gray-800 text-sm">
                            {option.label}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
          >
            Continue
            <span>→</span>
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <div className="text-5xl">{deviceInfo.image}</div>
            <div>
              <h3 className="font-semibold text-gray-800">{deviceInfo.name}</h3>
              <p className="text-sm text-gray-600">{deviceInfo.variant}</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Device Evaluation
          </h3>

          {getEvaluationData("deviceDetails").length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Device Details
              </h4>
              <ul className="space-y-2">
                {getEvaluationData("deviceDetails").map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-green-500 mt-0.5">●</span>
                    <span>
                      {item.label}: {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {getEvaluationData("screenCondition").length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Screen Condition
              </h4>
              <ul className="space-y-2">
                {getEvaluationData("screenCondition").map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-green-500 mt-0.5">●</span>
                    <span>
                      {item.label}: {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PrototypeForm;
