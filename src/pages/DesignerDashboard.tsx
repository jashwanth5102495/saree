import React, { useState, useEffect } from 'react';

interface Order {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  sareeType: string;
  material: string;
  color: string;
  design: string;
  measurements: {
    blouseLength: number;
    blouseChest: number;
    blouseWaist: number;
    blouseShoulder: number;
    blouseSleeve: number;
    blouseNeck: number;
    sareeLength: number;
    sareeWaist: number;
    sareeHip: number;
  };
  orderPlacedDate: string;
  expectedDeliveryDate: string;
  paymentMethod: 'cash' | 'online';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'paymentSuccessful';
  amount: number;
  advanceAmount: number;
  balanceAmount: number;
  status: string;
  specialInstructions?: string;
}

interface FormData {
  customerName: string;
  customerPhone: string;
  design: string;
  measurements: string;
  amount: string;
  advanceAmount: string;
  paymentMethod: string;
  presentDate: string;
  expectedDeliveryDate: string;
}

const DesignerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'new-order' | 'orders'>('new-order');
  const [orders, setOrders] = useState<Order[]>([]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    customerPhone: '',
    design: '',
    measurements: '',
    amount: '',
    advanceAmount: '',
    paymentMethod: 'cash',
    presentDate: new Date().toISOString().split('T')[0],
    expectedDeliveryDate: ''
  });



  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        name: formData.customerName,
        mobile: formData.customerPhone,
        designDescription: formData.design,
        measurements: formData.measurements,
        totalBill: formData.amount,
        advancePayment: formData.advanceAmount,
        paymentMethod: formData.paymentMethod,
        paymentStatus: formData.paymentMethod === 'cash' ? 'paid' : 'pending',
        presentDate: formData.presentDate,
        deliveryDate: formData.expectedDeliveryDate
      };

      const response = await fetch('/api/orders/custom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        const result = await response.json();
        
        // Show QR code if payment method is online
        if (formData.paymentMethod === 'online') {
          setCurrentOrderId(result.orderId || result._id);
          setShowQRCode(true);
        } else {
          // Show success popup for cash payments
          setShowSuccessPopup(true);
        }
        
        setFormData({
          customerName: '',
          customerPhone: '',
          design: '',
          measurements: '',
          amount: '',
          advanceAmount: '',
          paymentMethod: 'cash',
          presentDate: new Date().toISOString().split('T')[0],
          expectedDeliveryDate: ''
        });
        fetchOrders();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (orderId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/orders/${orderId}/payment-success`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          paymentStatus: 'paymentSuccessful'
        })
      });

      if (response.ok) {
        alert('Payment marked as successful!');
        fetchOrders();
      } else {
        alert('Error updating payment status');
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
      alert('Error updating payment status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Designer Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab('new-order')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'new-order'
                ? 'bg-gray-700 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            New Order
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'orders'
                ? 'bg-gray-700 text-blue-400 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            All Orders ({orders.length})
          </button>
        </div>

        {/* New Order Form */}
        {activeTab === 'new-order' && (
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Create New Order</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 9 Fields as requested */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                {/* 2. Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                {/* 3. Design Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Design Description *
                  </label>
                  <input
                    type="text"
                    name="design"
                    value={formData.design}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Describe the design details"
                  />
                </div>
                
                {/* 4. Measurements */}
                <div className="md:col-span-2 lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Measurements *
                  </label>
                  <textarea
                    name="measurements"
                    value={formData.measurements}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter all measurements details"
                  />
                </div>
                
                {/* 5. Total Bill */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Total Bill *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter total amount"
                  />
                </div>
                
                {/* 6. Advance Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Advance Payment *
                  </label>
                  <input
                    type="number"
                    name="advanceAmount"
                    value={formData.advanceAmount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter advance amount"
                  />
                </div>
                
                {/* 7. Cash or Online */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                
                {/* 8. Present Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Present Date *
                  </label>
                  <input
                    type="date"
                    name="presentDate"
                    value={formData.presentDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter all measurements"
                  />
                </div>
                
                {/* 9. Delivery Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Delivery Date *
                  </label>
                  <input
                    type="date"
                    name="expectedDeliveryDate"
                    value={formData.expectedDeliveryDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Order...' : 'Create Order'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* QR Code Modal */}
        {showQRCode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Payment QR Code</h3>
              <div className="text-center">
                <img 
                  src="/uploads/qr.png" 
                  alt="Payment QR Code" 
                  className="w-48 h-48 mx-auto mb-4 border-2 border-gray-600 rounded-lg"
                />
                <p className="text-gray-300 mb-6">Ask customer to scan this QR code for payment</p>
                
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      if (currentOrderId) {
                        handlePaymentSuccess(currentOrderId);
                      }
                      setShowQRCode(false);
                      setCurrentOrderId(null);
                      setShowSuccessPopup(true);
                    }}
                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Payment Successful
                  </button>
                  <button
                    onClick={() => {
                      setShowQRCode(false);
                      setCurrentOrderId(null);
                    }}
                    className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Success!</h3>
                <p className="text-gray-300 mb-6">Order created successfully!</p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders List */}
        {activeTab === 'orders' && (
          <div className="bg-gray-800 rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-semibold text-white">All Orders</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Saree Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delivery Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {orders.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{order.customerName}</div>
                          <div className="text-sm text-gray-300">{order.customerPhone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{order.sareeType}</div>
                          <div className="text-sm text-gray-300">{order.material} - {order.color}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">₹{order.amount}</div>
                        {order.advanceAmount > 0 && (
                          <div className="text-sm text-gray-300">Advance: ₹{order.advanceAmount}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white capitalize">{order.paymentMethod}</div>
                        {order.paymentMethod === 'online' && order.paymentStatus === 'pending' && (
                          <div className="mt-2">
                            <img src="/uploads/qr.png" alt="QR Code" className="w-16 h-16 mx-auto" />
                            <p className="text-xs text-gray-400 text-center mt-1">Scan to pay</p>
                          </div>
                        )}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.paymentStatus === 'paymentSuccessful' ? 'bg-green-100 text-green-800' :
                          order.paymentStatus === 'completed' ? 'bg-green-100 text-green-800' :
                          order.paymentStatus === 'paid' ? 'bg-blue-100 text-blue-800' :
                          order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.paymentStatus}
                        </span>
                        {order.paymentMethod === 'online' && order.paymentStatus === 'pending' && (
                          <button
                            onClick={() => handlePaymentSuccess(order._id)}
                            className="mt-2 w-full bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors"
                          >
                            Mark Payment Successful
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'ready' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {new Date(order.expectedDeliveryDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {orders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-300">No orders found</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignerDashboard;