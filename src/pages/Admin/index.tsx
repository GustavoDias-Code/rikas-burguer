import React, { useState, useRef } from 'react';
import { Container, AdminPanel, ItemList, ItemForm, Button, ImagePreview } from './styles';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'portions' | 'sauces' | 'drinks';
  serves?: string;
}

export const Admin: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: 'burgers'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Criar URL temporária para preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      
      // Converter imagem para Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && selectedItem) {
      // Atualizar item existente
      setItems(prev => prev.map(item => 
        item.id === selectedItem.id ? { ...formData, id: item.id } : item
      ));
    } else {
      // Adicionar novo item
      setItems(prev => [...prev, { ...formData, id: Date.now() }]);
    }

    // Resetar formulário
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
      category: 'burgers'
    });
    setImagePreview('');
    setIsEditing(false);
    setSelectedItem(null);
  };

  const handleEdit = (item: MenuItem) => {
    setSelectedItem(item);
    setFormData(item);
    setImagePreview(item.image);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <Container>
      <h1>Área Administrativa</h1>
      
      <AdminPanel>
        <section>
          <h2>{isEditing ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
          <ItemForm onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome do Produto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="burgers">Hambúrgueres</option>
                <option value="portions">Porções</option>
                <option value="sauces">Molhos</option>
                <option value="drinks">Bebidas</option>
              </select>
            </div>

            <div>
              <label>Imagem do Produto</label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <ImagePreview onClick={handleImageClick}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <div className="placeholder">
                    Clique para adicionar uma imagem
                  </div>
                )}
              </ImagePreview>
              <small>Clique na área acima para selecionar uma imagem</small>
            </div>

            {formData.category === 'sauces' && (
              <div>
                <label htmlFor="serves">Serve (opcional)</label>
                <input
                  type="text"
                  id="serves"
                  name="serves"
                  value={formData.serves || ''}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <Button type="submit">
              {isEditing ? 'Atualizar Item' : 'Adicionar Item'}
            </Button>

            {isEditing && (
              <Button 
                type="button" 
                onClick={() => {
                  setIsEditing(false);
                  setSelectedItem(null);
                  setFormData({
                    name: '',
                    description: '',
                    price: 0,
                    image: '',
                    category: 'burgers'
                  });
                  setImagePreview('');
                }}
                variant="secondary"
              >
                Cancelar Edição
              </Button>
            )}
          </ItemForm>
        </section>

        <section>
          <h2>Itens do Cardápio</h2>
          <ItemList>
            {items.map(item => (
              <div key={item.id} className="item">
                <img src={item.image} alt={item.name} />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>R$ {item.price.toFixed(2)}</span>
                  <div className="actions">
                    <Button onClick={() => handleEdit(item)} variant="edit">
                      Editar
                    </Button>
                    <Button onClick={() => handleDelete(item.id)} variant="delete">
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </ItemList>
        </section>
      </AdminPanel>
    </Container>
  );
}; 