import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '~/libs/firebase/admin'

const API = async (req: NextApiRequest, res: NextApiResponse) => {
  const { categoryName } = req.query

  if (!categoryName) {
    res.status(400).json({ error: 'categoryName is required' })
    return
  }

  const CategorySnapshot = await db
    .collection('category')
    .where('slug', '==', categoryName)
    .get()

  if (CategorySnapshot.empty) {
    res.status(404).json({ error: 'category not found' })
    return
  }

  const Snapshot = CategorySnapshot.docs[0]

  const CategoryRef = Snapshot.ref
  const CategoryData = Snapshot.data()

  const CareerSnapshot = await CategoryRef.collection('career').get()

  const CareerList = CareerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  res.status(200).json({ id: Snapshot.id, ...CategoryData, career: CareerList })
}

export default API
