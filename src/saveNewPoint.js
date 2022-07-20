export default async ({
  newPointObject,
  db
}) => {
  try {
    const points = await db.saveNewPointOnDB({
      name: newPointObject.name,
      x_axis: newPointObject.x,
      y_axis: newPointObject.y
    })
    return [points, null]
  } catch (error) {
    return [null, error]
  }
}
