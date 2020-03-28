export default async (req, res) => {
  const now = new Date().toISOString().split(/[T.]/).slice(0, 2).join(" ");

  res.status(200).json({ now });
};
