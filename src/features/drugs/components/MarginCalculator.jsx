import { Calculator } from "lucide-react";

export const MarginCalculator = ({
  useMarginCalculator,
  setUseMarginCalculator,
  marginPercentage,
  setMarginPercentage,
  calculatedSellingPrice,
  formData,
  formatCurrency,
}) => {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="useMarginCalculator"
          className="rounded border-gray-300 text-blue-500 focus:border-blue-500"
          checked={useMarginCalculator}
          onChange={(e) => setUseMarginCalculator(e.target.checked)}
        />
        <label
          htmlFor="useMarginCalculator"
          className="ml-2 text-sm font-medium text-gray-800 flex items-center">
          <Calculator size={18} className="mr-1" />
          Use Margin Calculator
        </label>
      </div>

      {useMarginCalculator && (
        <div className="bg-blue-50 p-4 rounded-xl mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Margin Percentage (%)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={marginPercentage}
                  onChange={(e) =>
                    setMarginPercentage(parseInt(e.target.value))
                  }
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-800">
                  {marginPercentage}
                </span>
              </div>

              <div className="flex gap-2 mt-2">
                {[10, 15, 25, 50, 75, 100].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setMarginPercentage(preset)}
                    className={`px-2 py-1 text-xs rounded ${
                      marginPercentage === preset
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
                    }`}>
                    {preset}%
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">Calculated Selling Price</label>
              <div className="bg-white p-3 rounded border text-lg font-semibold text-green-600">
                {formatCurrency(calculatedSellingPrice)}
              </div>
              {formData.purchasePrice && (
                <div className="text-xs text-gray-500 mt-1">
                  Profit: {formatCurrency(calculatedSellingPrice - parseInt(formData.purchasePrice))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
