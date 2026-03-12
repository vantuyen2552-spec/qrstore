export default function handler(req, res) {

  if (req.method === "POST") {

    const data = req.body;

    console.log("Thanh toán nhận được:", data);

    if (data.amount >= 5000) {
      return res.status(200).json({
        success: true,
        message: "Thanh toán thành công"
      });
    }

  }

  res.status(200).json({status:"ok"});
}
