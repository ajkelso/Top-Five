class CreateListsNominations < ActiveRecord::Migration[6.0]
  def change
    create_table :lists_nominations do |t|
      t.integer :list_id
      t.integer :nomination_id
      t.integer :rank

      t.timestamps
    end
  end
end
