import { MarginCalculator } from "./MarginCalculator";

export const DrugModalForm = ({
  showModal,
  editingDrug,
  formData,
  setFormData,
  categories,
  drugForms,
  handleSubmit,
  resetForm,
  useMarginCalculator,
  setUseMarginCalculator,
  marginPercentage,
  setMarginPercentage,
  calculatedSellingPrice,
  calculateMarginPercentage,
  formatCurrency,
}) => {
    if(!showModal) return null;

    return(
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">
                {editingDrug ? "Edit Data Drug" : "Add New Data drug"}
              </h3>
            </div>

            <div className="px-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Drug Code
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value })
                    }
                    placeholder="DRG0001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Drug Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Paracetamol 500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Generic
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.generic}
                    onChange={(e) =>
                      setFormData({ ...formData, generic: e.target.value })
                    }
                    placeholder="Acetaminophen 500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Category
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="Paracetamol 500mg">
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Drug Form
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.form}
                    onChange={(e) =>
                      setFormData({ ...formData, form: e.target.value })
                    }>
                    <option value="">Select Form</option>
                    {drugForms.map((form) => (
                      <option key={form} value={form}>
                        {form}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Dosage
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.dosage}
                    onChange={(e) =>
                      setFormData({ ...formData, dosage: e.target.value })
                    }
                    placeholder="500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Supplier
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.supplier}
                    onChange={(e) =>
                      setFormData({ ...formData, supplier: e.target.value })
                    }
                    placeholder="PT Kimia Farma"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Purchase Price
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500"
                    value={formData.purchasePrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        purchasePrice: parseInt(e.target.value) || "",
                      })
                    }
                    placeholder="5000"
                  />
                </div>

                {/* Margin Calculator Toggle */}
                <MarginCalculator
                useMarginCalculator={useMarginCalculator}
                setUseMarginCalculator={setUseMarginCalculator}
                marginPercentage={marginPercentage}
                setMarginPercentage={setMarginPercentage}
                calculatedSellingPrice={calculatedSellingPrice}
                formData={formData}
                formatCurrency={formatCurrency}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Selling Price
                    {!useMarginCalculator &&
                      formData.purchasePrice &&
                      formData.sellingPrice && (
                        <span className="text-xs text-green-600 ml-2">
                          (Margin:{" "}
                          {calculateMarginPercentage(
                            parseInt(formData.purchasePrice),
                            parseInt(formData.sellingPrice)
                          )}
                          %)
                        </span>
                      )}
                  </label>
                  <input
                    type="number"
                    required
                    className={`w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500 ${
                      useMarginCalculator ? 'bg-gray-100' : ''}`}
                    value={formData.sellingPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sellingPrice: parseInt(e.target.value) || "",
                      })
                    }
                    placeholder="7500"
                    readOnly={useMarginCalculator}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Initial Stock
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500 ${useMarginCalculator? 'bg-gray-100' : ''"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stock: parseInt(e.target.value) || "",
                      })
                    }
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Minimum Stock
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500 ${useMarginCalculator? 'bg-gray-100' : ''"
                    value={formData.minStock}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        minStock: parseInt(e.target.value) || "",
                      })
                    }
                    placeholder="5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:border-blue-500 ${useMarginCalculator? 'bg-gray-100' : ''"
                    value={formData.expiredDate}
                    onChange={(e) => setFormData({...formData, expiredDate:e.target.value})
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-3xl hover:bg-red-600 hover:text-white focus:outline-none focus:border-red-600 ">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 text-sm font-medium text-blue-400 bg-white border border-blue-400 rounded-3xl hover:bg-blue-400 hover:text-white focus:outline-none focus:border-blue-400 ">
                  {editingDrug ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
    )
};
