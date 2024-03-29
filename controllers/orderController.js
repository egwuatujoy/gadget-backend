import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new order
// @route GET /api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order Items");
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc Get order by ID
// @route GET /api/orders:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// @desc Update order to delivered
// @route GET /api/orders/:id/deliver
// @access Private

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});


export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
}