import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteProductReducer,
  deleteReviewReducer,
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReviewsReducer,
  productsReducer,
} from "./reducers/ProductReducer";
import {
  deleteProjectReducer,
  newProjectReducer,
  projectDetailsReducer,
  projectsReducer,
} from "./reducers/ProjectReducer";
import {
  deleteTenderReducer,
  newTenderReducer,
  tenderDetailsReducer,
  tendersReducer,
} from "./reducers/TenderReducers";
import {
  deleteHireReducer,
  newHireReducer,
  hireDetailsReducer,
  hiresReducer,
} from "./reducers/HiringReducer";
import {
  tendertablesReducer,
  tendertableDetailsReducer,
  newTenderTableReducer,
  deleteTenderTableReducer,
} from "./reducers/TenderTableRedu";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
  newNoteReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/CartReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/OrderReducer";

import { notesReducer } from "./reducers/NoteReducer";
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  projects: projectsReducer,
  projectDetails: projectDetailsReducer,
  tenders: tendersReducer,
  hires: hiresReducer,
  tenderDetails: tenderDetailsReducer,
  hireDetails: hireDetailsReducer,

  tendertables: tendertablesReducer,
  tendertableDetails: tendertableDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  order: newOrderReducer,
  myOrder: myOrdersReducer,
  myOrderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  createProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
  createProject: newProjectReducer,
  deleteProject: deleteProjectReducer,
  createTender: newTenderReducer,
  deleteTender: deleteTenderReducer,
  deleteHire: deleteHireReducer,
  createHire: newHireReducer,
  createTenderTable: newTenderTableReducer,
  deleteTenderTable: deleteTenderTableReducer,
  AllOrders: allOrdersReducer,
  deleteOrder: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  deleteReview: deleteReviewReducer,
  productReviews: productReviewsReducer,
  forgotPassword: forgotPasswordReducer,
  notes: notesReducer,
  newNote: newNoteReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
