import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  changeAvatar,
  changeCoverImage,
  loginUser,
  logoutUser,
  refreshAccesToken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/refresh-token").post(refreshAccesToken);
router.route("/change-password").post(verifyJwt, changeCurrentPassword);
router.route("/get-current-user").get(verifyJwt, getCurrentUser);
router.route("/change-details").post(verifyJwt, updateAccountDetails);
router
  .route("/change-avatar")
  .post(verifyJwt, upload.single("avatar"), changeAvatar);
router
  .route("/change-coverImage")
  .post(verifyJwt, upload.single("coverImage"), changeCoverImage);
export default router;
