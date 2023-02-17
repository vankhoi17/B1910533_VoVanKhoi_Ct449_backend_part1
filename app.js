const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routers/contact.route");
const ApiError = require("./app/api-error");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

// handle 404 response 
app.use((req, res, next) => {
    // code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resouurce not found"));
});
app.use((err, req, res, next) => {
    //Middleware xử lý lỗi tập trung
    // Trong các đoạn code xử lý ở các router, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(Error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
app.get("/", (req, res) => {
    res.json({ message: "wellcome to contact book application."});
});
app.use("/api/contacts", contactsRouter);

module.exports = app;