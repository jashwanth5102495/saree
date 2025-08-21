import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, User, Smartphone, FileText, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export function Workshop() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    designDescription: '',
    totalBill: '',
    advancePayment: '',
    paymentMethod: 'cash',
    presentDate: new Date().toISOString().split('T')[0],
    deliveryDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const workshopAddress = "first floor, Manjunath arcade, No -21/38, main road, opposite Medplus, Bengaluru, 560064, Karnataka, INDIA";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshopAddress)}`;

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
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          customerName: formData.name,
          customerPhone: formData.mobile,
          design: formData.designDescription,
          amount: formData.totalBill,
          advanceAmount: formData.advancePayment,
          paymentMethod: formData.paymentMethod,
          expectedDeliveryDate: formData.deliveryDate,
          sareeType: 'Custom Design',
          material: 'As per design',
          color: 'As per design'
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          mobile: '',
          designDescription: '',
          totalBill: '',
          advancePayment: '',
          paymentMethod: 'cash',
          presentDate: new Date().toISOString().split('T')[0],
          deliveryDate: ''
        });
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-black dark:via-gray-900 dark:to-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Custom Designer Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create custom saree orders with personalized designs
          </p>
        </motion.div>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg mb-6"
          >
            Order created successfully! It will be updated in the admin dashboard.
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Customer Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter customer name"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Smartphone className="w-4 h-4 inline mr-2" />
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            {/* Design Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Design Description *
              </label>
              <textarea
                name="designDescription"
                value={formData.designDescription}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                placeholder="Describe the custom design requirements..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Total Bill */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Total Bill (₹) *
                </label>
                <input
                  type="number"
                  name="totalBill"
                  value={formData.totalBill}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter total amount"
                />
              </div>

              {/* Advance Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Advance Payment (₹) *
                </label>
                <input
                  type="number"
                  name="advancePayment"
                  value={formData.advancePayment}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter advance amount"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Payment Method *
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                >
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>

              {/* Present Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Present Date
                </label>
                <input
                  type="date"
                  name="presentDate"
                  value={formData.presentDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Delivery Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Delivery Date *
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  required
                  min={formData.presentDate}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Order...' : 'Create Custom Order'}
              </button>
            </div>
          </form>

          {/* Workshop Location Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-pink-600 mr-3" />
              Workshop Location
            </h3>
            <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-xl mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                {workshopAddress}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Google Maps
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Google Maps will open automatically to show our exact location.
            <br />
            For any queries, feel free to contact us at +91 9740925835
          </p>
        </motion.div>
      </div>
    </div>
  );
}