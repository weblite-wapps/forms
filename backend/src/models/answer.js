import { model, Schema } from 'mongoose'

const answerSchema = new Schema(
  {
    form: { type: Schema.Types.ObjectId, ref: 'Form' },
    userId: Schema.Types.ObjectId,
    values: [Schema.Types.Mixed],
  },
  {
    versionKey: true,
    timestamps: true,
  },
)

answerSchema.index({ form: 1, userId: 1 })

const Answer = model('Answer', answerSchema)

export const getAnswer = query =>
  Answer.findOne(query)
    .select('-__v -createdAt -updatedAt')
    .lean()

export const getAnswers = form =>
  Answer.find({ form })
    .select('-__v -createdAt -updatedAt')
    .lean()

export const updateAnswer = (query, fields) =>
  Answer.updateOne(query, { $set: fields }, { upsert: true }).exec()
