class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :video_name
      t.string :author
      t.string :video_id

      t.timestamps
    end
    add_index :videos, :video_id, unique: true
  end
end
