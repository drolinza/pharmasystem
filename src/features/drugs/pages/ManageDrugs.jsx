import {
  AlertTriangle,
  Edit2,
  Package,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { DrugModalForm } from "../components/DrugModalForm";

export const ManageDrugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingDrug, setEditingDrug] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [showExpiredOnly, setShowExpiredOnly] = useState(false);
  // state form margin calculator
  const [useMarginCalculator, setUseMarginCalculator] = useState(false);
  const [marginPercentage, setMarginPercentage] = useState(50);
  const [calculatedSellingPrice, setCalculatedSellingPrice] = useState(0);
  
  // Sample Data
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        code: "DRG001",
        name: "Paracetamol",
        generic: "Acetaminophen",
        category: "Analgesic",
        purchasePrice: 5000,
        sellingPrice: 7500,
        stock: 15,
        minStock: 20,
        expiredDate: "2025-12-31",
        supplier: "PT Kimia Farma",
        dosage: "500mg",
        form: "Tablet",
        createdAt: "2024-01-15",
      },
      {
        id: 2,
        code: "DRG002",
        name: "Betadine Solution",
        generic: "-",
        category: "Antiseptic",
        purchasePrice: 15000,
        sellingPrice: 22000,
        stock: 30,
        minStock: 5,
        expiredDate: "2025-03-15",
        supplier: "PT Mahakan Beta Farma",
        dosage: "10%",
        form: "Liquid",
        createdAt: "2024-01-05",
      },
      {
        id: 3,
        code: "DRG003",
        name: "Amoxicillin 250mg",
        generic: "Amoxicillin",
        category: "Antibiotic",
        purchasePrice: 8000,
        sellingPrice: 12000,
        stock: 5,
        minStock: 10,
        expiredDate: "2025-06-30",
        supplier: "PT Sanbe Farma",
        dosage: "250mg",
        form: "Capsule",
        createdAt: "2024-01-10",
      },
    ];
    setDrugs(sampleData);
  }, []);

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    generic: "",
    category: "",
    purchasePrice: "",
    sellingPrice: "",
    stock: "",
    minStock: "",
    expiredDate: "",
    supplier: "",
    dosage: "",
    form: "",
  });


  const categories = [
    "Analgesic",
    "Antibiotic",
    "Antiseptic",
    "Vitamin",
    "Supplement",
    "Cough Medicine",
    "Fever Medicine",
  ];
  const drugForms = [
    "Tablet",
    "Capsule",
    "Syrup",
    "Liquid",
    "Ointment",
    "Cream",
  ];

  // Function for Calculate selling price based on margin
  const calculateSellingPrice = (purchasePrice, margin) => {
    if (!purchasePrice || !margin) return 0;
    return Math.round(purchasePrice * (1 + margin / 100));
  };

  // Function for calculate margin base on price we type
  const calculateMarginPercentage = (purchasePrice, sellingPrice) => {
    if (!purchasePrice || !sellingPrice) return 0;
    return Math.round(((sellingPrice - purchasePrice) / purchasePrice) * 100);
  };

  // effect for update automatic selling price when margin calculator is active
  useEffect(() => {
    if (useMarginCalculator && formData.purchasePrice) {
      const newSellingPrice = calculateSellingPrice(
        parseInt(formData.purchasePrice),
        marginPercentage
      );
      setCalculatedSellingPrice(newSellingPrice);
      setFormData((prev) => ({
        ...prev,
        sellingPrice: newSellingPrice,
      }));
    }
  }, [formData.purchasePrice, marginPercentage, useMarginCalculator]);

  const handleSubmit = () => {
    if (editingDrug) {
      setDrugs(
        drugs.map((drug) =>
          drug.id === editingDrug.id
            ? {
                ...formData,
                id: editingDrug.id,
                createdAt: editingDrug.createdAt,
              }
            : drug
        )
      );
    } else {
      const newDrug = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString().split("T")[0],
      };
      setDrugs([...drugs, newDrug]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      generic: "",
      category: "",
      purchasePrice: "",
      sellingPrice: "",
      stock: "",
      minStock: "",
      expiredDate: "",
      supplier: "",
      dosage: "",
      form: "",
    });
    setShowModal(false);
    setEditingDrug(null);
    setUseMarginCalculator(false);
    setMarginPercentage(50);
    setCalculatedSellingPrice(0);
  };

  const handleEdit = (drug) => {
    setEditingDrug(drug);
    setFormData(drug);
    setShowModal(true);
    // Set margin calculator based on data yang ada
    if (drug.purchasePrice && drug.sellingPrice) {
      const currentMargin = calculateMarginPercentage(
        drug.purchasePrice,
        drug.sellingPrice
      );
      setMarginPercentage(currentMargin);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this drug?")) {
      setDrugs(drugs.filter((drug) => drug.id !== id));
    }
  };

  const isExpired = (expiredDate) => {
    return new Date(expiredDate) < new Date();
  };

  const isNearExpired = (expiredDate) => {
    const today = new Date();
    const expired = new Date(expiredDate);
    const diffTime = expired - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
  };

  const isLowStock = (stock, minStock) => {
    return stock <= minStock;
  };

  const filteredDrugs = drugs.filter((drug) => {
    const matchSearch =
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      filterCategory === "" || drug.category === filterCategory;
    const matchExpired = !showExpiredOnly || isExpired(drug.expiredDate);

    return matchSearch && matchCategory && matchExpired;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className=" text-gray-700 p-4 sm:p-6 lg:p-8 max-w-8xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-sm sm:text-2xl lg:text-3xl font-bold mb-2">
          Manage Drugs
        </h1>
        <p className="text-sm text-gray-600">
          Drug inventory management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-600">
          <div className="flex items-center">
            <Package size={30} className=" text-secondary" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total drugs</p>
              <p className="text-2xl font-semibold text-gray-900">
                {drugs.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-600">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-red-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Low Stock</p>
              <p className="text-2xl font-semibold text-gray-900">
                {
                  drugs.filter((drug) => isLowStock(drug.stock, drug.minStock))
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-600">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-orange-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Near Expiry</p>
              <p className="text-2xl font-semibold text-gray-900">
                {drugs.filter((drug) => isNearExpired(drug.expiredDate)).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-600">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-red-500" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Expired</p>
              <p className="text-2xl font-semibold text-gray-900">
                {drugs.filter((drug) => isExpired(drug.expiredDate)).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              />
              <input
                type="text"
                placeholder="Search drug name or code"
                className="text-sm text-gray-800 pl-8 pr-4 py-2 border border-gray-500 rounded-4xl focus:outline-none focus:border-blue-400 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <select
              className="text-sm px-4 py-2 border border-gray-500 rounded-3xl focus:outline-none focus:border-blue-400 "
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="" className="text-sm sm:text-xs">
                All Categories
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-sm">
                  {cat}
                </option>
              ))}
            </select>

            {/* Expired Filter */}
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-primary text-secondary focus:border-blue-400"
                checked={showExpiredOnly}
                onChange={(e) => setShowExpiredOnly(e.target.checked)}
              />
              <span className="ml-2 text-sm text-text">Expired only</span>
            </label>
          </div>

          {/* Add button  */}
          <button
            onClick={() => setShowModal(true)}
            className="text-sm bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded-4xl flex items-center gap-2 transition-colors">
            <Plus size={18} />
            Add Drug
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Drug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Generic
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Expiry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDrugs.map((drug) => (
                <tr key={drug.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {drug.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {drug.code} ● {drug.dosage}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-xs font-medium">{drug.generic}</span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {drug.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">
                      {formatCurrency(drug.sellingPrice)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Cost: {formatCurrency(drug.purchasePrice)}
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Margin:
                      {calculateMarginPercentage(
                        drug.purchasePrice,
                        drug.sellingPrice
                      )}
                      %
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span
                        className={`text-sm font-medium ${
                          isLowStock(drug.stock, drug.minStock)
                            ? "text-red-600"
                            : "text-gray-800"
                        }`}>
                        {drug.stock}
                      </span>
                      {isLowStock(drug.stock, drug.minStock) && (
                        <AlertTriangle
                          size={15}
                          className="text-red-500 ml-1"
                        />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Min: {drug.minStock}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm ${
                        isExpired(drug.expiredDate)
                          ? "text-red-600 font-medium"
                          : "text-gray-800"
                      }`}>
                      {new Date(drug.expiredDate).toLocaleDateString("en-US")}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      {isExpired(drug.expiredDate) && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Expired
                        </span>
                      )}
                      {isNearExpired(drug.expiredDate) &&
                        !isExpired(drug.expiredDate) && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            Near Expiry
                          </span>
                        )}
                      {isLowStock(drug.stock, drug.minStock) && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Low stock
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(drug)}
                        className="text-secondary hover:text-blue-900 p-1 rounded-full hover:bg-blue-100">
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(drug.id)}
                        className="text-red-900 hover:text-red-900 p-1 rounded-full hover:bg-red-100 ">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDrugs.length === 0 && (
          <div className="text-center py-12">
            <Package size={15} className="mx-auto text-gray-500" />
            <h3 className="mt-2 text-sm font-medium text-gray-800">
              No drugs found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || filterCategory || showExpiredOnly
                ? "No drugs match the current filters."
                : "Get started by adding your first drug."}
            </p>
          </div>
        )}
      </div>

      {/* Modal Forms */}
      <DrugModalForm
        showModal={showModal}
        editingDrug={editingDrug}
        formData={formData}
        setFormData={setFormData}
        categories={categories}
        drugForms={drugForms}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
        useMarginCalculator={useMarginCalculator}
        setUseMarginCalculator={setUseMarginCalculator}
        marginPercentage={marginPercentage}
        setMarginPercentage={setMarginPercentage}
        calculatedSellingPrice={calculatedSellingPrice}
        calculateMarginPercentage={calculateMarginPercentage}
        formatCurrency={formatCurrency}
      />
    </div>
  );
};
