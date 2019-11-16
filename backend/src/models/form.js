import { model, Schema } from 'mongoose'

const formSchema = new Schema(
  {
    creatorId: Schema.Types.ObjectId,
    isActive: Boolean,
    fields: [
      {
        type: { type: String },
        data: Schema.Types.Mixed,
      },
    ],
  },
  {
    versionKey: true,
    timestamps: true,
  },
)

formSchema.index({ province: 1, county: 1, school: 1 })

const Form = model('Form', formSchema)

export const getFormById = id =>
  Form.findById(id)
    .select('-__v -createdAt -updatedAt')
    .lean()

export const updateForm = (_id, fields) =>
  Form.updateOne({ _id }, { $set: fields }, { upsert: true }).exec()
