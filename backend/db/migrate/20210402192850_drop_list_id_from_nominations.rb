class DropListIdFromNominations < ActiveRecord::Migration[6.0]
  def change
    remove_column :nominations, :list_id
  end
end
