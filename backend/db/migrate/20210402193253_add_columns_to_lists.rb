class AddColumnsToLists < ActiveRecord::Migration[6.0]
  def change
    change_table :lists do |t|
      t.string :first
      t.string :second
      t.string :third
      t.string :fourth
      t.string :fifth
    end
  end
end
