class CreateNominations < ActiveRecord::Migration[6.0]
  def change
    create_table :nominations do |t|
      t.string :name
      t.integer :list_id
      t.integer :category_id

      t.timestamps
    end
  end
end
