// import React, { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("products");
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);

//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   const [formData, setFormData] = useState({
//     category_id: "",
//     sub_category_id: "",
//     name: "",
//     price: "",
//     description: "",
//     image: null,
//     popular: false,
//     stock: 0,
//   });

//   const [admin] = useState({
//     name: "Admin",
//     email: "admin@pharmacy.lk",
//     profilePic: "https://i.pravatar.cc/100?img=25",
//   });

//   // Fetch Categories
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("http://localhost/Eye-products-DB/api/get_categories.php");
//       const data = await res.json();

//       if (data.success && data.data) {
//         setCategories(data.data);
//         if (data.data.length > 0) {
//           const firstCatId = data.data[0].id;
//           setFormData(prev => ({ ...prev, category_id: firstCatId }));
//           fetchSubCategories(firstCatId);
//         }
//       }
//     } catch (err) {
//       setError("Cannot connect to server.");
//     }
//   };

//   // Fetch Subcategories
//   const fetchSubCategories = async (categoryId) => {
//     if (!categoryId) return;
//     try {
//       const res = await fetch(
//         `http://localhost/Eye-products-DB/api/get_subcategories.php?category_id=${categoryId}`
//       );
//       const data = await res.json();
//       if (data.success) {
//         setSubCategories(data.data || []);
//         if (data.data?.length > 0) {
//           setFormData(prev => ({ ...prev, sub_category_id: data.data[0].id }));
//         }
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost/Eye-products-DB/api/get_products.php");
//       const data = await res.json();
//       if (data.success) setProducts(data.data || []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked
//             : type === "file" ? files[0]
//             : name === "price" || name === "stock" ? Number(value) || 0
//             : value,
//     }));

//     if (name === "category_id") {
//       setFormData((prev) => ({ ...prev, sub_category_id: "" }));
//       fetchSubCategories(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     if (!formData.name || !formData.price || !formData.category_id || !formData.sub_category_id) {
//       setError("⚠️ Name, Price, Category, and Subcategory are required.");
//       setIsSubmitting(false);
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key] !== null && formData[key] !== undefined) {
//         formDataToSend.append(key, formData[key]);
//       }
//     });

//     if (isEditing) formDataToSend.append("id", editId);

//     try {
//       const url = isEditing
//         ? "http://localhost/Eye-products-DB/api/update_product.php"
//         : "http://localhost/Eye-products-DB/api/add_product.php";

//       const res = await fetch(url, { method: "POST", body: formDataToSend });
//       const result = await res.json();

//       if (result.success) {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Product added successfully!");
//         setShowForm(false);
//         resetForm();
//         fetchProducts();
//       } else {
//         setError(result.message || "Failed to save");
//       }
//     } catch (err) {
//       setError("Server error occurred");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       category_id: categories.length > 0 ? categories[0].id : "",
//       sub_category_id: "",
//       name: "",
//       price: "",
//       description: "",
//       image: null,
//       popular: false,
//       stock: 0,
//     });
//     setIsEditing(false);
//     setEditId(null);
//   };

//   const handleEdit = (product) => {
//     setFormData({
//       category_id: product.category_id,
//       sub_category_id: product.sub_category_id,
//       name: product.name,
//       price: product.price,
//       description: product.description || "",
//       image: null,
//       popular: Boolean(product.popular),
//       stock: product.stock || 0,
//     });
//     fetchSubCategories(product.category_id);
//     setIsEditing(true);
//     setEditId(product.id);
//     setShowForm(true);
//   };

//   const confirmDelete = (id) => {
//     setItemToDelete(id);
//     setShowConfirmModal(true);
//   };

//   const handleDelete = async () => {
//     if (!itemToDelete) return;
//     try {
//       const res = await fetch("http://localhost/Eye-products-DB/api/delete_product.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${itemToDelete}`,
//       });
//       const result = await res.json();
//       if (result.success) {
//         setMessage("✅ Deleted!");
//         setProducts(prev => prev.filter(p => p.id !== itemToDelete));
//       }
//     } catch (err) {
//       setError("Delete failed");
//     } finally {
//       setShowConfirmModal(false);
//       setItemToDelete(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow p-6">
//         <div className="flex items-center gap-6">
//           <img src={admin.profilePic} alt="admin" className="w-20 h-20 rounded-full border-4 border-emerald-500" />
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">{admin.name}</h1>
//             <p className="text-gray-600">{admin.email}</p>
//             <p className="text-emerald-600 font-semibold">Pharmacy Admin Panel</p>
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       {message && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-xl">{message}</div>}
//       {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl">{error}</div>}

//       <div className="mb-6">
//         <button
//           onClick={() => { resetForm(); setShowForm(true); }}
//           className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//         >
//           + Add New Product
//         </button>
//       </div>

//       {/* Products Table */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         <div className="p-6 border-b">
//           <h2 className="text-2xl font-bold">All Products</h2>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-4 text-left">Image</th>
//                 <th className="p-4 text-left">Product Name</th>
//                 <th className="p-4 text-left">Category</th>
//                 <th className="p-4 text-left">Subcategory</th>
//                 <th className="p-4 text-left">Price</th>
//                 <th className="p-4 text-left">Stock</th>
//                 <th className="p-4 text-left">Popular</th>
//                 <th className="p-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr><td colSpan="8" className="p-10 text-center text-gray-500">No products yet</td></tr>
//               ) : (
//                 products.map((product) => (
//                   <tr key={product.id} className="border-b hover:bg-gray-50">
//                     <td className="p-4">
//                       <img
//                         src={
//                           product.image_url
//                             ? `http://localhost/Eye-products-DB/${product.image_url}`
//                             : "https://via.placeholder.com/80x80?text=No+Image"
//                         }
//                         alt={product.name}
//                         className="w-16 h-16 object-cover rounded-lg"
//                         onError={(e) => {
//                           e.target.src = "https://via.placeholder.com/80x80?text=Failed";
//                         }}
//                       />
//                     </td>
//                     <td className="p-4 font-medium">{product.name}</td>
//                     <td className="p-4">{product.category_name || "—"}</td>
//                     <td className="p-4">{product.sub_category_name || "—"}</td>
//                     <td className="p-4 font-semibold text-emerald-700">
//                       Rs. {Number(product.price).toLocaleString("en-LK")}
//                     </td>
//                     <td className="p-4">{product.stock}</td>
//                     <td className="p-4">
//                       {product.popular ? "Yes" : "No"}
//                     </td>
//                     <td className="p-4 space-x-3">
//                       <button onClick={() => handleEdit(product)} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700">
//                         Edit
//                       </button>
//                       <button onClick={() => confirmDelete(product.id)} className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add/Edit Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
//             <h3 className="text-2xl font-bold mb-6 text-center">
//               {isEditing ? "Edit Product" : "Add New Product"}
//             </h3>

//             {/* Category & Subcategory selects */}
//             <select name="category_id" value={formData.category_id} onChange={handleChange} className="w-full p-3 mb-4 border rounded-xl" required>
//               <option value="">Select Category</option>
//               {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
//             </select>

//             <select name="sub_category_id" value={formData.sub_category_id} onChange={handleChange} className="w-full p-3 mb-4 border rounded-xl" required>
//               <option value="">Select Subcategory</option>
//               {subCategories.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
//             </select>

//             <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-3 mb-4 border rounded-xl" required />

//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label>Price (Rs.)</label>
//                 <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} className="w-full p-3 border rounded-xl" required />
//               </div>
//               <div>
//                 <label>Stock</label>
//                 <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full p-3 border rounded-xl" />
//               </div>
//             </div>

//             <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-3 mb-4 border rounded-xl h-24" />

//             <div className="flex items-center gap-2 mb-4">
//               <input type="checkbox" name="popular" checked={formData.popular} onChange={handleChange} />
//               <label>Mark as Popular</label>
//             </div>

//             <div className="mb-6">
//               <label className="block mb-2">Product Image</label>
//               <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
//             </div>

//             <div className="flex justify-end gap-4">
//               <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 bg-gray-200 rounded-xl">Cancel</button>
//               <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-emerald-700 text-white rounded-xl">
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Add Product"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Delete Modal */}
//       {showConfirmModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
//             <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
//             <p className="mb-6">Are you sure?</p>
//             <div className="flex justify-center gap-4">
//               <button onClick={() => setShowConfirmModal(false)} className="px-6 py-3 bg-gray-200 rounded-xl">Cancel</button>
//               <button onClick={handleDelete} className="px-6 py-3 bg-red-600 text-white rounded-xl">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;



import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    price: "",
    description: "",
    image: null,
    popular: false,
    stock: 0,
  });

  const [admin] = useState({
    name: "Admin",
    email: "admin@aperture.optic",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });

  // Fetch functions remain the same...
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/Eye-products-DB/api/get_categories.php");
      const data = await res.json();
      if (data.success && data.data) {
        setCategories(data.data);
        if (data.data.length > 0) {
          const firstCatId = data.data[0].id;
          setFormData(prev => ({ ...prev, category_id: firstCatId }));
          fetchSubCategories(firstCatId);
        }
      }
    } catch (err) {
      setError("Cannot connect to server.");
    }
  };

  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const res = await fetch(
        `http://localhost/Eye-products-DB/api/get_subcategories.php?category_id=${categoryId}`
      );
      const data = await res.json();
      if (data.success) {
        setSubCategories(data.data || []);
        if (data.data?.length > 0) {
          setFormData(prev => ({ ...prev, sub_category_id: data.data[0].id }));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/Eye-products-DB/api/get_products.php");
      const data = await res.json();
      if (data.success) setProducts(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked
            : type === "file" ? files[0]
            : name === "price" || name === "stock" ? Number(value) || 0
            : value,
    }));

    if (name === "category_id") {
      setFormData((prev) => ({ ...prev, sub_category_id: "" }));
      fetchSubCategories(value);
    }
  };

  const handleSubmit = async (e) => { /* ... same as before ... */ };
  const resetForm = () => { /* ... same ... */ };
  const handleEdit = (product) => { /* ... same ... */ };
  const confirmDelete = (id) => { /* ... same ... */ };
  const handleDelete = async () => { /* ... same ... */ };

  return (
    <div className="min-h-screen bg-[#fbf9f6] font-sans text-[#111111] p-6 md:p-12">
      {/* Header - unchanged */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-6">
          <img 
            src={admin.profilePic} 
            alt="admin" 
            className="w-20 h-20 rounded-full border-4 border-[#111111]" 
          />
          <div>
            <h1 className="text-4xl font-serif tracking-tight">{admin.name}</h1>
            <p className="text-gray-600 text-lg">{admin.email}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mt-1">APERTURE OPTIC • ADMIN</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      {message && <div className="mb-8 p-5 bg-green-50 border border-green-200 text-green-800 rounded-2xl">{message}</div>}
      {error && <div className="mb-8 p-5 bg-red-50 border border-red-200 text-red-800 rounded-2xl">{error}</div>}

      <div className="mb-10">
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium tracking-wider text-sm transition-all duration-200 flex items-center gap-3"
        >
          <span>+</span> ADD NEW PRODUCT
        </button>
      </div>

      {/* Products Table - unchanged */}
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        {/* ... table remains the same ... */}
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-3xl font-serif tracking-tight">All Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* Table content remains unchanged */}
            {/* ... (keep your existing table code) ... */}
          </table>
        </div>
      </div>

      {/* ==================== FIXED MODAL ==================== */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl my-8 max-h-[92vh] overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="px-8 pt-8 pb-4 border-b">
              <h3 className="text-3xl font-serif tracking-tight">
                {isEditing ? "Edit Product" : "Add New Product"}
              </h3>
            </div>

            {/* Scrollable Form Body */}
            <form 
              onSubmit={handleSubmit} 
              className="flex-1 overflow-y-auto p-8 space-y-6"
            >
              <select 
                name="category_id" 
                value={formData.category_id} 
                onChange={handleChange} 
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>

              <select 
                name="sub_category_id" 
                value={formData.sub_category_id} 
                onChange={handleChange} 
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black"
                required
              >
                <option value="">Select Subcategory</option>
                {subCategories.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
              </select>

              <input 
                type="text" 
                name="name" 
                placeholder="Product Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black" 
                required 
              />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest text-gray-500 mb-2">PRICE (Rs.)</label>
                  <input 
                    type="number" 
                    name="price" 
                    step="0.01" 
                    value={formData.price} 
                    onChange={handleChange} 
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-gray-500 mb-2">STOCK</label>
                  <input 
                    type="number" 
                    name="stock" 
                    value={formData.stock} 
                    onChange={handleChange} 
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black" 
                  />
                </div>
              </div>

              <textarea 
                name="description" 
                placeholder="Description (optional)" 
                value={formData.description} 
                onChange={handleChange} 
                className="w-full p-4 border border-gray-200 rounded-2xl h-28 focus:outline-none focus:border-black" 
              />

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  name="popular" 
                  checked={formData.popular} 
                  onChange={handleChange} 
                  className="w-5 h-5 accent-black"
                />
                <label>Mark as Popular</label>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-gray-500 mb-3">PRODUCT IMAGE</label>
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*" 
                  onChange={handleChange} 
                  className="w-full text-sm file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:bg-gray-100 file:text-sm hover:file:bg-gray-200"
                />
              </div>
            </form>

            {/* Modal Footer */}
            <div className="p-8 border-t flex justify-end gap-4 bg-white rounded-b-3xl">
              <button 
                type="button" 
                onClick={() => setShowForm(false)} 
                className="px-8 py-4 border border-gray-300 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                form="productForm" 
                disabled={isSubmitting} 
                onClick={(e) => {
                  const form = e.currentTarget.form;
                  if (form) form.dispatchEvent(new Event('submit', { cancelable: true }));
                }}
                className="px-10 py-4 bg-[#111111] text-white rounded-2xl hover:bg-black transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Saving..." : isEditing ? "Update" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal - unchanged */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-6">
          <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center">
            <h3 className="text-2xl font-serif mb-4">Delete Product?</h3>
            <p className="text-gray-600 mb-8">This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowConfirmModal(false)} 
                className="px-8 py-4 border border-gray-300 rounded-2xl hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete} 
                className="px-8 py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;